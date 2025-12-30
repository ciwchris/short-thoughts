---
title: |
  Sandboxing AI Coding Agents
pubDate: 2025-12-29
description: |
  A brief walkthrough of setting up a Lima VM to sandbox coding agents.
tags: ['sandboxing', 'ai-agents', 'coding-agents', 'lima', 'virtual-machines', 'security']
---

[An Ask HN question came up yesterday on how others are sandboxing coding
agents](https://news.ycombinator.com/item?id=46400129).

I have not taken sandboxing seriously. When previously researching this topic the information and
tooling to accomplish this seemed lacking. I figured for my minimal usage I could manually approve
each request AI makes. But as my usage grows and products mature a safer and more efficient
approach is needed. I hear more stories about how AI discovers and uses unintended secret
information, mistakenly deletes directories outside the project, and exfiltration of private data.

The HN question did not receive a lot of responses. I considered a few, but didn't to generate a
deep research query of my own. Of the options presented creating a Lima VM seemed the easiest with
sufficient security for my usage, although the steps became more involved as I implemented the
solution. Below are the steps.

## Lima VM installation

The [install instructions Lima provided](https://lima-vm.io/docs/installation/) did not work for me,
therefore I downloaded the latest release myself from [their
releases](https://github.com/lima-vm/lima/releases) and installed it: `sudo tar -C /usr/local -xzf
lima-2.0.3-Linux-x86_64.tar.gz`

You may need to install QEMU libraries as well: `sudo dnf install qemu-img qemu-kvm`

The VM needs to mount the project directory, so the project files can accessed. To do so we need to
configure the SELinux policy settings by adding a file label. Then the label needs to be applied to
all of the existing files within the directory.

- `-a`: Add policy
- `-t`: The label type, in this example access to files which exist within the home directory
- `sandbox-test`: Is the directory to apply the policy to

```bash
sudo semanage fcontext -a -t svirt_home_t "sandbox-test(/.*)?"
sudo restorecon -Rv sandbox-test
```

## Creating a VM

A configuration file can be used so that the VM is created with needed dependencies, as well as
other VM settings.

```yaml title="dotnet-sandbox.yaml"
images:
- location: "https://cloud-images.ubuntu.com/releases/24.04/release/ubuntu-24.04-server-cloudimg-amd64.img"
  arch: "x86_64"
cpus: 4
memory: "8GiB"
mountType: "9p"

provision:
- mode: system
  script: |
    apt-get update
    # The .NET application needs the SDK 
    apt-get install -y dotnet-sdk-10
    # The React frontend needs NPM
    snap install node --classic
    # Using the Codex CLI
    npm install -g @openai/codex
    # Codex expects `python`, not `python3`
    apt-get install -y python-is-python3
```

Now the VM can be created and started, not the `:w` to make the mounted directory writable:

```bash
limactl start --name=dotnet-sandbox --mount-only .:w dotnet-sandbox.yaml
```

Follow the output instructions for entering the VM's shell:

```bash
limactl shell dotnet-sandbox
```

## Other commands

- Stop: `limactl stop dotnet-sandbox`
- Delete: `limactl delete dotnet-sandbox`

Setup the commit config for the coding agent:

```bash
git config --global user.name "AI Agent"
git config --global user.email "agent@internal.sandbox"
```

Codex cannot push to git remotes without access, but to further enforce Codex from being able to
push a rule can be added:

```bash title=".rules"
{
	"rules": [
	    {
		    "pattern": ["git", "push"],
		    "action": "forbidden"
	    }
	]
}
