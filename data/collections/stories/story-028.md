---
number: 28
---

Number 3 this week, _ncc_ is a new tool created by the [Zeit](https://zeit.co/) team to compile a Node.js project and all its dependencies into a single JavaScript file.

It can be useful when deploying applications to serveless environments (such as AWS Lambda or Azure Functions) to avoid uploading a deep tree of `node_modules` files that contain a lot of irrelevant files (documentations, tests...) and thus can be very heavy.

As an example, the GraphQL server example mentioned in the [blog entry](https://zeit.co/blog/ncc) is compiled into a file that is 35 times smaller than the original files.

A bundler like [Webpack](https://webpack.js.org/) or [Rollup](https://rollupjs.org/) could accomplish a similar task but _ncc_ does not require any configuration and supports TypeScript out of the box.
