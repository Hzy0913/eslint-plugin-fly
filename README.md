# eslint-plugin-fly
This package provides fly's .eslintrc as an extensible shared config.

## Install

```
 npm i eslint-plugin-fly -D
```

## Usage
in your `.eslintrc` config
```javascript
{
  ...
  "plugins": [
    "fly"
  ],
  "rules": {
    "fly/no-use-img": "error"
  }
}
```

## Rules

#### The following are the optional configuration rules provided 

```js
    "fly/no-use-img": "error"
```
 You need to use a unified < image / > component to replace the `img` tag.
