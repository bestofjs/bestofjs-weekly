---
number: 58
---

The newcomer this week is _Tesseract.js_, the JavaScript port of a Tesseract, a famous OCR (Optical Character Recognition) project written in C++, whose development started in the 80s!

The online demo let you upload images from your computer and get the text content after a few seconds.

I tried with a simple screenshot (from _Best of JavaScript_ of course) and it worked, I got my text!

It can work in the browser or in Node.js, it supports more than 100 languages and several image formats, including .JPG and .PNG files.

It works by downloading trained data for a given language and storing them in the browser's [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API), a key-value store available in modern browsers.
