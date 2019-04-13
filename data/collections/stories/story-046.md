---
number: 46
---

Number one this week, _Editor.js_ is a "rich text" editor that can be included in any HTML page to let users edit the page content.

It relies on [contenteditable](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable), a standard HTML attribute that can make any HTML tag editable by the end-user.

Instead of simply generating raw HTML code from the user's input, it generates a structured JSON tree that can processed by any backend.

Each editable block (header, link, list, image...) is provided by a plugin that needs to be installed separately to extend the core features.

Last but not least, keyboard shortcuts are handled as expected.

If you are interested in this type of editor, also called WYSIWYG ("What You See Is What You Get") editors, check the [Rich Text Editors](https://bestofjs.org/tags/rich-text-editor) category from _Best of JavaScript_.
