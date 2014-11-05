# CSS Linting for Code Reviews
---

How to use this tool:

1. Paste your rendered CSS file (not Less or SASS) in to the test.css file, or copy the entire file in to the CSS folder
2. Open up Terminal or other command line interface
3. Change directories (`cd`) into this folder
4. type `grunt` and hit Enter

CSS Lint will give you errors right in the Terminal window. There is also a `watch` function that will re-run every time there is a change made to a CSS file in the CSS folder. To end the grunt session, press "Control+C".

**Note that the default options for CSSLint are used here. This tool will not catch everything, and some items it outputs are merely suggestions. This is not intended to be a standalone tool for checking CSS, and a manual review is still required.**