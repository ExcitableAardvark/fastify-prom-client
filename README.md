# fastify-prom-client
> instrument a fastify application for consumption by prometheus

### Installation 

    npm install --save fastify-prom-client

### Usage
```js
// use default options
fastify.register(require('fastify-prom-client'))

// or if you wanted to customise the metric
const prometheus = require('prom-client')

fastify.register(require('fastify-prom-client'), {
  metric: new prometheus.Histogram({
    name: 'http_request_buckets_milliseconds',
    help: 'request duration buckets in milliseconds'
  })
})
```

See `example.js` for a full example.

### License
Released under the 3-Clause BSD License. See `LICENSE` for more information.
