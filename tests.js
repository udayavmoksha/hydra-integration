const HydraServiceFactory = require('./index').HydraServiceFactory;
const expect = require("chai").expect;

describe('Hydra Service Factory', () => {
    it('Building hydra service + express', async() => {
        const factory = new HydraServiceFactory({
            hydra: {
                'serviceName': 'express-service-test',
                'serviceDescription': 'Basic express service',
                'serviceIP': '127.0.0.1',
                'servicePort': 3000,
                'serviceType': 'express',
                'serviceVersion': '1.0.0',
                'redis': {
                    'url': '127.0.0.1',
                    'port': 6379,
                    'db': 15
                }
            }
        });

        let info = await factory.init();
        let app = await factory.getService({
            bootstrap: (app, factory) => {
                app.get('/welcome', (req, res) => {
                    res.send('Hello World!');
                });
            }
        });

        return factory.shutdown();
    });
});