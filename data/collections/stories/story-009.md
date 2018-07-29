---
number: 9
---

Debugging JavaScript running in the browser is made easy by the powerful "DevTools" integrated in Chrome and Firefox browsers.

The project number 1 this week *ndb* from the Chrome team aims to provide the same  experience but for JavaScript running in Node.js.

There were projects with similar goals in the past (like *node-inspector* or *iron-node*).

Since 2016 there is already a built-in debugging feature in Node.js, see [this article from Paul Irish](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27).

Also it's possible to debug right from the editor and do [Node.js Debugging in VS Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging).

However *ndb* goes further by using [Puppeteer](https://pptr.dev/), a library to control Chrome over the [DevTools protocol](https://chromedevtools.github.io/devtools-protocol/), released one year ago and very trendy over the last months.

*ndb* may become the de-facto debugging tool for node.js very soon.