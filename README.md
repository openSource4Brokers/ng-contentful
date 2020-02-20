# ng-contentful

## Getting started for developers

- [Install NodeJS](https://nodejs.org/). Hint: eventually install and use [nvm](https://medium.com/@Joachim8675309/installing-node-js-with-nvm-4dc469c977d9) for easy installing and/or switching between node versions
- Clone this repository: `git clone https://github.com/JosVermoesen/ng-contentful.git`.
- Run `npm install` inside the project root.
- Run `ng serve` in a terminal from the project root.
- Profit. :tada:

## Development Tools used for this app

- [NodeJS](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Angular CLI](https://www.npmjs.com/package/@angular/cli): `npm i -g @angular/cli`

## NPM packages used for this app

- [bootstrap](https://www.npmjs.com/package/bootstrap): `npm i bootstrap`


## styles.scss

For use of bootstrap, add also into your global styles.scss:

```
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
html {
  font-size: 14px;
}
```

## Updating Angular 8

This app is on a version of Angular 8.
Before starting an update to latest version of 8, you have to commit first

update to latest Angular 8:
`ng update @angular/cli@8 @angular/core@8`

Follow the instructions eventualy for fixes
