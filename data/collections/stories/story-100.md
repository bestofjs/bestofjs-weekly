---
number: 100
---

It's already the 100th issue of Best of JavaScript's newsletter, thank you for checking our rankings every week!

Number one this week, _Crank.js_ is a framework to write UI components with JSX.

It's inspired by React but it takes a totally different approach to handle side-effects. While React functional components can only be synchronous functions, components in Crank.js can be asynchronous functions (returning promises) or [generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*).

The [introduction post](https://crank.js.org/blog/introducing-crank) explains well the motivation of the author: instead of relying of special features provided by the framework (like hooks and refs), it relies only on modern JavaScript features such as `async await` and generators.

Generator functions are used to create stateful components: instead of handling a state, the components can `yield` different output over time.

Also the use of function generator gives you access to all methods from component lifecycle:

- a `try finally` block can be used to to fire code when a component un-mount
- since `this` context provided by _Crank.js_ is an async iterable of props, it's possible to compare old and new props when a component updates.

For communication between components, it relies on the [Custom Event API](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) letting child components dispatch events that are handled by the parent components.

See you next week for the issue number 101!
