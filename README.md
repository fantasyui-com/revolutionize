# revolutionize
PostCSS based web application skinning strategy. This is a PostCSS plugin that will append new CSS properties to existing CSS rules. New CSS properties are loaded from a theme. See [cgui](https://github.com/fantasyui-com/cgui) for CLI.

## Plugin Function
All this library does is match selectors, extract rules from a template, and inject them into the CSS being processed.

## Example Scenario
Imagine that you really love round buttons. You create a "my-perfect-button.css" stylesheet, and now all you have to do is say: Hey! new-thing-i-found.css has ugly buttons, let's ```revolutionize``` all those buttons by stating ```.btn is a button``` therefore get all button properties from "my-perfect-button.css" and append them into new-thing-i-found.css's .btn rules.
