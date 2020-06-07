---
number: 106
---

Number one this week, _Solid_ is a library to build UI similar to React.

Components are written using JSX but it does not rely on the Virtual DOM like React does.

The reactivity is handled in a different way, using one of the "reactive primitive" the [API](https://github.com/ryansolid/solid/blob/master/documentation/api.md) provides, `createState` being the most basic one. Under the hood, it uses [proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) to track when a value change.

It's not only the fastest UI framework according to the benchmarks but it's also the one with the smallest bundle size, check the implementation of the famous [Real World example app](https://github.com/ryansolid/solid-realworld) to get a better understanding of _Solid_.
