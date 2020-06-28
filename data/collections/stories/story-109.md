---
number: 109
---

_React Query_ is a library that provides hooks to query and update data from your React application.

It shines with the way it handles a local cache to provide a sweet user experience.

When requesting multiples time the same data, the library is able to retrieve the previous result of the query from its cache, while re-fetching fresh data in the background. As a result the user does not have to wait for the fresh data, staring at a loading indicator.

This concept of "State While Revalidate" is also used by the library [SWR](https://swr.vercel.app/) but _React Query_ provides a lot of extra features like pagination and pre-fetching. The killer feature may be a specific [DevTool](https://github.com/tannerlinsley/react-query-devtools) that lets you visualize the content of the local cache, for each request that was made, with the different statuses ("fresh", "fetching", "stale"...).

Don't forget to check the other projects of the author Tanner Linsley who has two other projects on _Best of JavaScript_:

- [React Table](https://github.com/tannerlinsley/react-table)
- [React Virtual](https://github.com/tannerlinsley/react-virtual)
