---
number: 37
---

Number one this week, _FlexSearch_ is a highly customizable library to perform full-text searches in the browser or in Node.js.

It works in 2 steps: first you provide an array of simple JavaScript objects to build the search index, specifying some options including the fields to index.

Once the index is built, you can get the results that match a given query very fast (in less than 2ms for the tests I did in Node.js from the 1500 projects tracked by _Best of JavaScript_)

It's possible to combine several queries, assigning different relevance score depending on the matching conditions.

It claims to be the fastest library in [its category](https://bestofjs.org/tags/search), as highlighted by the benchmarks results provided by the documentation.
