---
number: 131
---
Number one this week, _TypeFest_ is a collection of types to improve your TypeScript code.

The project is from the prolific developer [Sindre Sorhus](https://github.com/sindresorhus) who did a great job explaining the use case behind each type and providing links to the TypeScript playground.

It's also a nice project to learn about TypeScript built-in types (`Partial`, `Required`, `ReturnType`, `Omit`...) and how to combine them.

Expect the project to move fast as users made a lot of proposals to add new types and because TypeScript itself is moving at a fast pace, check the latest features introduced by the [version 4.1](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/) released 10 days ago.

Among the "New Faces" showing up this week, _Layr_ is a very interesting concept to build fullstack applications in JavaScript and TypeScript.

What makes it unique compared to all existing solutions is the way the frontend layer inherits from the backend layer (running on Node.js).

You don't have to build a separate REST or GraphQL API, instead you handle classes in a very "object-oriented" way that could "dramatically simplify full‑stack development".

For people who'd be worried by security, note that you control which properties and methods are exposed by the backend to the frontend.

It works especially well with TypeScript as types defined in the backend can be imported in the frontend, making your code "DRY" and solving one of the most difficult questions when developing fullstack applications: where is the source of truth?