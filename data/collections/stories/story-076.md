---
number: 76
---

Number one this week, _Dio_ is a library to build UI interfaces inspired by React.

_Dio_ lets you create components in a functional way: what is rendered is the result returned by a function named `h` (standing for `hyperscript`).

Like in React, to handle side effect and the component state, you can use hooks like `useEffect`, `useLayout` or `useState`.

One of the differences is that the `h` function can return a Promise, which can be useful to render an element only when the Promise resolves.

Its minimal approach reminds us several projects, including:

- [Preact](https://preactjs.com/)
- [Hyperapp](https://hyperapp.dev/)
- [Choo](https://choo.io/)

Choosing a UI framework seems to be a never-ending story!
