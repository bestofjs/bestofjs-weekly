---
number: 138
---
Number one this week, _JerryScript_ is "a JavaScript engine for Internet of Things". It's so light that it can run on environments with 64 KB of RAM and 200 KB of ROM. It can be embedded into micro-controllers such as Raspberry Pi.

The new face is _ForgoJS_ , a brand new lightweight UI framework that borrows the JSX template language and the component approach from React.

The rest is very different:

- The API tries to stay as much as possible close to the native DOM API
- The components are made of functions that return an object with a `render(props)` function.
- There is no automatic "re render", they have to be called manually from a `rerender` function provided by the API.