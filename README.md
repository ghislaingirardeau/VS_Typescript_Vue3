# VueSchool VScode config for Vue

## Lint with [ESLint](https://eslint.org/)

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

## Prettier

- formater par defaut du profile vue3 est prettier
- syntax terminal dans le package.json "format"
- utiliser prettierrc.json poru changer les instructions du format des scripts js

**si plein de warning dans les fichier, run npm format et stage => warnin disappear & no need to commit**

## Custom snippet

clean auto-complete : settings => suggest => list des suggestions à montrer

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

## Debugger vs code

- Mettre le breakpoint dans la function et **surtout apres** variable que l'on souhaite observer
- Ouvrir javascript debugger et taper: **npm run dev**
- Le site est alors ouvert sur le browser, sera en pause sur le break point et retournera dans vscode pour debugger

- à la modif du script, le site et le debugger se relance
- peut faire la meme chose dans une fonction

on peut alors naviguer normalement sur le site, dés qu'un beakpoint sera retrouvé, le debug de vs code sera alors affiché

## Shortcup keyboard

- ctrl p => rechercher un fichier dans le projet
- ctrl + shift + arrow => select block of text
- alt + arrouw move selected block of code

## Style

extension incrementor

## Html

p{hello} => <p>hello</p>
