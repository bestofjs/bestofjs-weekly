---
number: 59
---

If you’ve been around awhile you may remember us getting all excited about a new JavaScript runtime named _Deno_. Almost a year ago, it was the top project of [our second newsletter](https://weekly.bestofjs.org/issues/2). Deno is a new JavaScript runtime that aims to solve some of the defects of Node.js.

Here are the main points in a few words:

- More secure: you have to explicitly grant Node.js to access the file system or to make HTTP requests for example
- No more centralized package management system: you can include an external JavaScript file downloaded from anywhere, it does not have to be registered in the `package.json` file.
- TypeScript is supported by default

Although still not production ready, it has gained a lot of traction over the last few months with over 140 contributors.

Version 1.0 is expected by the end of the summer and we can’t wait to share more details about any developments!

Speaking of Node.js, 12.6 brings a powerful feature: the workers_thread module is now available without special flags. We often hear that Node.js’ single-threaded architecture doesn’t fare well with heavy computations. Hopefully, with the workers_thread module, the ability to create a main thread and several worker threads may change the game!
