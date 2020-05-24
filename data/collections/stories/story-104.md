---
number: 104
---

_Deno_ is still the hottest of the JavaScript world, following the official release of the version 1 we mentioned last week.

The second hottest project of the week is a library from Facebook called _Recoil_.

React being only a view layer and not a full framework, state management has always been challenging in React projects, leaving developers facing difficult choices.

[Flux](https://facebook.github.io/flux/) (from Facebook too) and [Redux](https://redux.js.org/) are two very popular solutions.

However there is a trend towards lighter solutions based on React hooks and Context, one of my favorite solutions being [Unstated Next](https://github.com/jamiebuilds/unstated-next).

Check the [State Management](https://bestofjs.org/projects?tags=state) tag from _Best of JavaScript_ in to get an overview of the main contenders.

_Recoil_ introduces the concept of "atoms" and aims to solve three issues to manage the state in an efficient way:

- how to share state between components
- how to handle derived data (data that can be computed from a single source of truth but does not need to be stored)
- how to observe application-wide changes

It's so promising that it may be the solution that powers _Best of JavaScript_ UI soon!
