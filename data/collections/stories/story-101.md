---
number: 101
---

Number one this week, _Vidact_ is a lightweight alternative to React that compiles JSX code into vanilla JS code that manipulates the DOM.

Like [Svelte](https://svelte.dev/), it's not a framework, it's a compiler that runs at build time.

But it takes a very different approach. Instead of introducing a new syntax, it offers an API as close as possible as React:

- Functional components written in JSX
- Side effects handled by hooks: `useState`, `useEffect`, `useRef`...

Be aware that it's not production-ready, as the author says:

> The goal is to have an alternative library for those who love React, but are looking for a more lightweight and high-performance implementation for smaller projects.
