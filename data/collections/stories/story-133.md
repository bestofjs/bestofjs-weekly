---
number: 133
---
Number one this week, `wmr` ("Web Modules Runtime") is a tool to build develop modern web applications with JSX.

It's built on top of [Preact](https://preactjs.com/) a popular clone of React: almost the same API, including functional components and hooks but with a smaller footprint.

One of the main features is that you don't have to install dependencies using `npm install`, you can call external packages by importing them directly in the code. It relies on the support of [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) by modern browsers.

Also it provides "Hot Module Reloading" to reflect changes in the browser a few milliseconds after any change in the code.

These two features, along to the support of TypeScript out-of-the-box, lead to a great Developer Experience.

A big difference with other solutions is the small footprint on the local disk: only 2.8 MB compared to hundreds of MB for a typical application built with _Create React Application_ for example.

However, including ESLint (which is optional) would add more than 150 MB... which is annoying if you consider linting as a must-have feature of your workflow (I do!).

Features are not only limited to the development, for production _wmr_ is able to pre-render all pages at build time, which is impressive for such a "tiny" tool.

Check [Snowpack](https://www.snowpack.dev/) if you look for a more robust alternative.