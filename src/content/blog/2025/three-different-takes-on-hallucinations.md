---
title: |
    Three different takes on hallucinations
pubDate: 2025-09-10
description: |
    Three different perspectives on what it means for models to hallucinate and how should we think about this behavior.
tags: ['ai', 'hallucination']
---
I've read three different takes on hallucinations this week, and what struck me most was not how they agreed, but how differently they framed the problem. Each piece approaches hallucinations from a unique angle: technical, procedural, and philosophical. Taken together, they sketch a landscape of possibilities.

OpenAI's [Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/) presents the view that not all questions have answers, and so models should be trained with an incentive to abstain rather than answer confidently.

> One challenge remains stubbornly hard to fully solve: hallucinations. By this we mean instances where a model confidently generates an answer that isn't true.

> Most evaluations measure model performance in a way that encourages guessing rather than honesty about uncertainty.

> Penalize confident errors more than you penalize uncertainty, and give partial credit for appropriate expressions of uncertainty.

Then there's [Is the LLM response wrong, or have you just failed to iterate it?](https://mikecaulfield.substack.com/p/is-the-llm-response-wrong-or-have), which suggests that inaccurate responses are often the result of receiving an answer too soon. If pushed further, by having the model iterate, it can examine the evidence and follow new lines of discovery, much like humans do.

> But the initial response here isn’t a hallucination, it’s a mixture of conflation, incomplete discovery, and poor weighting of evidence. It looks a lot like what your average human would do when navigating a confusing information environment.

> LLMs are no different. What often is deemed a “wrong” response is often merely a first pass at describing the beliefs out there. And the solution is the same: iterate the process.

Finally, there is [Knowledge and memory](https://www.robinsloan.com/lab/knowledge-and-memory/), which suggests hallucinations will not go away because knowledge must be tied to memory. Humans *feel* the solidity of facts, while models lack the experiences required to ground their knowledge.

> Language models don’t have memory at all, because they don’t have experiences that compound and inform each other.

> Many engineers have pinned their hopes on the context window as a kind of memory, a place where “experiences” might accrue, leave useful traces. There’s certainly some utility there… but the analogy is waking up in a hotel room and finding a scratchpad full of notes that you don’t remember making… but the disorientation of that scenario should be clear.

> The solid, structured memory that we use to understand what we know and don’t know — when and when not to guess — requires time, and probably also a sort of causal web, episodes and experiences all linked together.

Each of these pieces makes interesting points, and together they explain different facets of model hallucination. Models are too eager to provide an answer. There are many uncertainties and "it depends" in life. Incentivizing models to reflect this may irritate users, but it better mirrors reality.

However, these responses make clear that what we receive is only a first pass, one that should be refined by iterating, digging deeper, and pushing the model further. Perhaps this process of discovery is still not enough to create true memory, as the third author points out, but it does seem to edge closer to mimicking a brief experience.

Currently, model context is built by labeling messages as system, user, or agent. We’ve learned it would be better to create a hierarchy of significance for these categories, system messages should carry more weight and not be overridden by user messages. What if context were segmented by other dimensions, like time, so a model could build a clearer picture of what it has learned?

Humans also continue processing conversations or experiences outside the event itself. What if models pushed themselves to dig deeper without user prompting, allowing them to provide a more thoughtful answer after the interaction had ended?

There is still so much more to explore, we are far from exhausting what’s possible.
