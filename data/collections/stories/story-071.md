---
number: 71
---

Number one this week, _Robot_ is a library to create [finite state machines](https://brilliant.org/wiki/finite-state-machines/) in a functional way.

The documentation explains clearly how state machines can help build more resilient applications, showing a very concrete example: an inline field to edit the title of a page.

Maintaining the state of your application by handling a collection of attributes and writing imperative code to toggle the attributes is error-prone because it's hard to track all the possible combinations.

With _Robot_, you start by defining all the states of your application (given them a name) and the events that can trigger a transition from one state to another one.

_Robot_ shines with a compact and elegant API and the way it handles asynchronous operations, using the `invoke` keyword to trigger a transition when a Promise resolves.

Integrations as "hooks" are available for popular frameworks such as React or Preact.
