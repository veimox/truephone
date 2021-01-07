# Truephone TS lib

This package contains a TS library for the [Truephone API v2](https://docs.connect.truphone.com/apireference)

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

## How to use it

```ts
import { SIMCardManagementApi } from 'truephone'

let simApi = new SIMCardManagementApi();
let orderApi = new OrderManagementApi();
let productApi = new ProductCatalogueApi();
let subApi = new SubscriptionManagementApi();

simApi.getSimsV2().then(/*useme*/)

```

## References
* [How to create credentials](https://docs.connect.truphone.com/docs/authentication)
* [Truephone API v2](https://docs.connect.truphone.com/apireference)