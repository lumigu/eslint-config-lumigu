# eslint-config-lumigu

ESLint configuration for Lumigu ECMAScript projects.

## Install

Add the `eslint-config-lumigu` module and its peer dependencies to `devDependencies`:

```sh
$ npm install eslint-config-lumigu eslint eslint-plugin-import eslint-plugin-node -D
```

## Usage

[Shareable configurations](https://eslint.org/docs/developer-guide/shareable-configs) are meant to be used with the `extends` feature in `.eslintrc` files.  First, in the root of your project create a new `.eslintrc` file:

```sh
$ touch .estlingrc
```

Second, open your new `.eslintrc` file in your favorite editor, and the following JSON object:

```json
{
  "extends": "lumigu"
}
```

You can add your own customization by adding overrides to the `rules` property.

Finally, you can validate your ECMAScript project by adding an NPM script to your `package.json` file:

```json
{
  "scipts": {
    "lint": "eslint . --config=eslintrc",
  }
}
```
