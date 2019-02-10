---
number: 37
---

Number one this week, _FlexSearch_ is a highly customizable library to perform full-text searches in the browser or in Node.js.

It works in 2 steps:

- First you provide an array of simple JavaScript objects to build the search index, specifying some options including the fields to index.
- Once the index is built, you can get the results that match a given query very fast.

It's possible to combine several queries, assigning different "relevance score" depending on the matching conditions.

According to the benchmarks results mentioned by the documentation, it's the fastest library in [its category](https://bestofjs.org/tags/search). During my tests in Node.js, I got search results in less than 2ms, searching through the 1500 projects tracked by _Best of JavaScript_.
