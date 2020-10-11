---
number: 124
---
Number one this week, _Elsa_ is a new JavaScript runtime written in Go.

Whereas Node.js and [Deno](https://deno.land/) use the [V8 JavaScript engine](https://v8.dev), it's built on top of [QuickJS](https://bellard.org/quickjs/) a "small and embeddable" Javascript engine that supports the latest specification of the language (ES2020).

Source files are bundled with [esbuild](https://github.com/evanw/esbuild/) a JavaScript bundler also written in Go.
According to the benchmarks, _esbuild_ bundles files a lot faster than the [most popular solutions](https://bestofjs.org/projects?tags=module): Webpack, Parcel, Rollup, and Fusebox.

Like Deno, Elsa supports natively TypeScript files and lets you import any file from simple URLs (similar to the good old `<script>` tag in the browser).

Be aware that the project is at a very experimental stage.
