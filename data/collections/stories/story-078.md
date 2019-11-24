---
number: 78
---

Number one this week, _React Adaptive Loading Hooks_ is a collection of React hooks to get data about the network connection and the device hardware.

It can help create applications that "adapt" to the environment, by delivering content that depend on the network conditions.

For example, a component could load a video if the network connection is fast (4G) or a small image if it's a low-speed connection.

Unfortunately the browser support is currently limited.

Similar hooks are provided by the following libraries:

- `useNetworkStatus()` from [The Platform](https://github.com/jaredpalmer/the-platform)
- `useNetwork()` from [react-use](https://github.com/streamich/react-use)

If you only need to check whether the user is online or not you could use [React Detect Offine](https://github.com/chrisbolin/react-detect-offline) library. It works by calling the [Online and offline events API](https://developer.mozilla.org/en-US/docs/Online_and_offline_events) or doing "polling" if the API is not available in the browser.
