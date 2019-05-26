---
number: 52
---

_Svelte_, the framework that runs at compilation time has been hot for more than one month and is back at the first position.

At position number 2, _Ola_ is a library created by our friend Francisco Presencia to interpolate numbers. Given an initial value and a target value, it allows you to update smoothly the values over time.

The API is very simple, it works in 2 steps:

- You start by creating an instance of `Ola` object that wraps the value(s) to track, setting the initial value(s) and how much time the transition will last
- You set the target value(s) using the `set` method

For example the documentation shows how you can move smoothly an object on the screen, following the mouse clicks, by interpolating its position.

2 points that make _Ola_ great:

- It works lazily: the value at any time is only computed when you read it
- Compared to other contenders like [Tween.js](https://github.com/CreateJS/TweenJS) animations are super-smooth, there is no "harsh corner" if there is an update while a previous transition is still ongoing, as the author says.
