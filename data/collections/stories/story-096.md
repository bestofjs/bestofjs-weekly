---
number: 96
---

Number one this week, _Gretchen_ is a HTTP client for the browser built on top of `fetch` API.

The main difference with similar solutions like [Ky](https://github.com/sindresorhus/ky) or [Fetch-Retry](https://github.com/zeit/fetch-retry) is the error handling and the TypeScript support, as it aims to be a "type-safe fetch".

It does not throw errors but returns either a `data` object or an `error` object, for error code statuses.

Let's see how an example of code looks like:

```
type UserType = {
  name: string;
};
type ErrorType = {
  messages: string[];
};

const { error, data } = await gretch<UserType, ErrorType>(
  "/user/12345"
).json();

if (error) {
  // error is typeof ErrorType
} else if (data) {
  // data is typeof UserType
}
```

It's an interesting option when you know the shape your errors will have.
