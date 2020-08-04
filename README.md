# React (Typescript) CRUD Generator

Generating CRUD React Typescript files based on a domain driven, route centric application.

This project was made because React/Typescript is a mess of ideas and having some consistent framework to build apps is important to our sanity. Especially if we're building out a CRUD frontend and the code is basically the same between each resource!

## Baseline requirements for the project

- React with Hooks
- React Router 5+
- Jest

## Layout

With the example of `Character`.

```
src/
  characters/
    Character.ts
    CharacterRoutes.tsx
    CharacterLayout.tsx
    EditCharacter.tsx
    IndexCharacter.tsx
    NewCharacter.tsx
    ShowCharacter.tsx
    edit/
    index/
    shared/
    show/
spec/
  characters/
    IndexCharacter.spec.tsx
    ShowCharacter.spec.tsx
    EditCharacter.spec.tsx
```

## Setup

`npm install`

## Usage

`./index.js -r RESOURCENAME -p CUSTOM_PLURAL_IF_ADDING_S_DOESNT_WORK`

Options:

- `-r` The name of the resource, capitalized
- `-p` Plural name override

## TODO

- [ ] Add scaffolding for shared forms between new/edit forms
- [X] Custom layouts per resource?
- [ ] Distribute via NPM
- [x] Remove Enzyme references
- [ ] Router Specs

## Other Authors/Contributors

- [Sam Zeidman](https://github.com/szeidman) for project/conceptual support
