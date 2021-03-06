# Koa Integration
Integrate [Koa framework](http://koajs.com/) with hydra.
> Hydra serviceType: koa

## NPM dependencies
```bash
npm i koa koa-router --save
```

## Configuration example
```js
const factory = new HydraServiceFactory({
    hydra: {
        'serviceName': 'koa-service-test',
        'serviceDescription': 'Basic koa service on top of Hydra',
        'serviceIP': '127.0.0.1',
        'servicePort': 3000,
        'serviceType': 'koa',
        'serviceVersion': '1.0.0',
        'redis': {
            'host': '127.0.0.1',
            'port': 6379,
            'db': 15
        }
    }
});
```

## Usage
```js
const HydraServiceFactory = require('hydra-integration').HydraServiceFactory;
const factory = new HydraServiceFactory(config);
const router = require('koa-router')();

factory.init().then(factory => factory.getService(service => {
    router.get('/v1/welcome', async(ctx) => ctx.body = 'Hello World!');
    service.use(router.routes());
}));
```
