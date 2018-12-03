---
number: 27
---

The project number one this week, _Learn Git Branching_ is a web application that lets you visualize the effects of Git commands such as `branch`, `merge`, `rebase`...

However this week's story is the [Event-stream drama](https://schneid.io/blog/event-stream-vulnerability-explained/).

In a few words, `event-stream` is a Node.js package included in a lot of popular projects (right now more than 1500 projects depend on it).

A developer was given access to the package and published a version that contains a malicious code.
The code was intended to steal information from a crypto-currency wallet.

There were a lot of [talks](https://gist.github.com/dominictarr/9fd9c1024c94592bc7268d36b8d83b3a) around this drama, about security concerns and the burden of maintaining open-source projects.

It's a strong reminder that we have to be careful when installing packages from NPM.
