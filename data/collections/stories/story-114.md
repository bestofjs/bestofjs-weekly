---
number: 114
---

Number one this week, _QA Wolf_ is a solution to do end-to-end testing of web applications in a quick and intuitive way, right from the browser.

You start from the CLI by specifying a URL to test and _QA Wolf_ automatically launches a Chromium browser (the open source browser that Chrome is built on top of).

And then the magic happens: while you are interacting with the page, you see in real time the test suite code updated in your IDE!

The test suite is written using a familiar syntax from [Jest](https://jestjs.io/) testing framework and can be reviewed and manually updated.

It's built on top of [PlayWright](https://playwright.dev/) a Node.js library to automate Chromium, Firefox and WebKit browsers, so it means that you can run your tests in any of these 3 browsers.

Tests can be run in CI server, a "workflow" file for _GitHub Actions_ can be automatically created. Also TypeScript is automatically detected.

I gave it a try, creating basic tests for _Best of JS_ application, and I got tests running on GitHub without efforts, including videos of the tests stored as .mp4 files, which can be very useful to debug a failing test. See here for details: https://github.com/bestofjs/bestofjs-webui/actions.

Overall _QA Wolf_ does a great job of setting up all the things related to browser testing.
