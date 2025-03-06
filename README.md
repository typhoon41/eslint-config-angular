# @typhoon41/eslint-config

> Strict, shareable config for Angular v19+ projects usint ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html).

To see the rules that this config uses, please read the [config itself](./index.js).

## Installation

```
$ npm install --save-dev @typhoon41/eslint-config-angular
```

## Usage

Once the `@typhoon41/eslint-config-angular` package is installed, you can use it by importing and specifying `@typhoon41/eslint-config-angular` in the root of your configuration through spread operator and combine it with your other [`plugins`](https://eslint.org/docs/latest/use/configure/combine-configs) of your [ESLint configuration](https://eslint.org/docs/latest/use/configure/).

```js
import defaultConfiguration from "@typhoon41/eslint-config-angular";

export default [
    ...defaultConfiguration,
    {
        "rules": {
            // Additional, per-project rules...
        }
    }
];
```

## License

Apache-2 © Nikola Dragićević