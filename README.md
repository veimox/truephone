# Truphone TS lib

This package build a TS library for the [Truphone API v2](https://docs.connect.truphone.com/apireference).

It makes use of `openapi-generator-cli` to generate a TS client that is bundled [as a npm module](https://www.npmjs.com/package/truphone)

## How to build
```bash
npm install
npm run api
```

## Deployment
```bash
npm version <patch/minor/major>
```
The package will be deployed by the CI on every tag made

## References
* [How to create credentials](https://docs.connect.truphone.com/docs/authentication)
* [Truphone API v2](https://docs.connect.truphone.com/apireference)