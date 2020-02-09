---
number: 89
---

Number one this week, _LInQer_ is a TypeScript port of [LINQ](https://docs.microsoft.com/en-us/dotnet/csharp/linq/) the query language feature integrated in C# language.

It uses generators under to hood to let you iterate collection of items in a very efficient way.

Using _LInQer_ data structure, you can perform transformations on arrays equivalent to the native methods `map` or `filter` for example. The big difference is that a new array is not created at each step of the pipeline.

It can work with any kind of iterable objects (that is to say any collection of items you can loop through using a `for ... of` loop).

If you are interested in this topic, have a look at [FromFrom](https://github.com/tomi/fromfrom) another library to transform sequence of data inspired by LINQ.
