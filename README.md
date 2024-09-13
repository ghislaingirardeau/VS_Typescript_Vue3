# Boilerplate Code for Typescript with Vue.js 3 Course

This is the boilerplate code for the TypeScript with Vue.js 3 Course.

## How to Install

```sh
npx degit vueschool/ts-vue-boilerplate
```

```sh
npm install
npm run dev
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

la config de base est dans .eslintrc
https://eslint.vuejs.org/

settings.json: on save fix eslint error

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
```

### Prettier

- formater par defaut du profile vue3 est prettier
- syntax terminal dans le package.json "format"
- utiliser prettierrc.json poru changer les instructions du format des scripts js

**si plein de warning dans les fichier, run npm format et stage => warnin disappear & no need to commit**

### Custom snippet

**les snippets ne sont pas partagé entre les profils**

- select all the code
- ctrl + shift + p
- generate Snippet (extension à installer snippet generator)
- give name and prefix => enter & it's go to the clipboard
- ctrl + shift + p
- configure snippet: open the write file, and paste the generate
  - if snippet to type in global vue file (comme vbase) => vue.json
  - if snippet to type in template vue file => html.json
  - if snippet to type in script lang ts vue file => typescript.json
  - ...
