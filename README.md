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

\*_Gulp will inject all styles automatically_

### How to

Inside **index.html** you can implement any html logic and components structure.
Inside **styles** directory you may seen several directories.

- **components** - is for BEM components (standalone independent elements)
- **helpers** - variables, mixins, postcards and helper functions
- **layouts** - styles which defines where components places have to be
- **pages** - some special styles for concrete web pages

## Gulp tasks

```
├─┬ build
│ └─┬ <series>
│   ├── clean
│   ├── styles
│   ├── html
│   └── images
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

\*_default command is serve_

_@author_ [**Max Abzaloff**](https://github.com/MaxAbzaloff)
