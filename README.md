# Basic html and scss setup for web development

This project is boilerplate for html and css work.

## Folder structure

```
.
├── index.html
└── styles
    ├── components
    │   └── _index.scss
    ├── helpers
    │   └── _index.scss
    ├── index.scss
    ├── layouts
    │   └── _index.scss
    └── pages
        └── _index.scss

```

*_Gulp will inject all styles automatically_

### How to

Inside __index.html__ you can implement any html logic and components structure. 
Inside __styles__ directory you may seen several directories.
* __components__ - is for BEM components (standalone independent elements)
* __helpers__ - variables, mixins, postcards and helper functions
* __layouts__ - styles which defines where components places have to be
* __pages__ - some special styles for concrete web pages

## Gulp tasks

```
├─┬ build
│ └─┬ <series>
│   ├── clean
│   ├── styles
│   └── html
├─┬ serve
│ └─┬ <series>
│   ├─┬ <series>
│   │ ├── clean
│   │ ├── styles
│   │ └── html
│   └─┬ <parallel>
│     ├── serve
│     ├── watchStyles
│     └── watchHtml
└─┬ default
  └─┬ <series>
    ├─┬ <series>
    │ ├── clean
    │ ├── styles
    │ └── html
    └─┬ <parallel>
      ├── serve
      ├── watchStyles
      └── watchHtml
```

*_default command is serve_


*@author* [**Max Abzaloff**](https://github.com/MaxAbzaloff)
