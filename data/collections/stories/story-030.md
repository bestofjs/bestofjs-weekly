---
number: 30
---

Number one this week _Quicklink_ is a library that automatically fetches links included in a web page, in order to improve performance in the browser.

It works by scanning links that are visible to the user and creating automatically `<link rel="prefetch">` tags in the page header, when the browser is idle.

It takes advantage of 3 recent features of modern browsers:

- The [Link Prefetching API](https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ) is used to fetch the response of the links in advance.
- The [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) is used to detect when a given element becomes visibles in the browser (when it enters the "viewport").
- The [requestIdleCallback API](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback) is used to detect when the browser is idle, hence available to make the "prefetch" HTTP calls.
