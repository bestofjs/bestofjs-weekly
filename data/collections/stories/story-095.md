---
number: 95
---

Number one this week, _Zod_ is a library to validate user input against composable schemas.

It shines with its TypeScript powerful features. The main benefit of using _Zod_ over other solutions like [Yup](https://github.com/jquense/yup) is:

> Eliminating the need to define static types and runtime validators separately.

Often, the shape of the objects to validate is written at 2 different places:

- static types provided by TypeScript, used to validate at compile time
- schema used to validate data at run time

Using Zot schemas, you don't have to write types, you can access the type of a schema using `zod.TypeOf` like this:

```
const projectSchema = zod.object({
  name: zod.string(),
  stars: zod.number()
});

type Project = zod.TypeOf<typeof ProjectSchema>
```

One more thing: besides the invisible enemy that spreads fear all over the world, the biggest news of the week for the JavaScript community is the [acquisition of NPM by GitHub](https://github.blog/2020-03-16-npm-is-joining-github/).

With this merger comes exciting new planned features such as support for [“Workspaces”](https://github.com/npm/rfcs/blob/de8d71c0453f5cf443d3ef2f47e313f12dd6aaf9/accepted/0000-workspaces.md) and other improvements!
