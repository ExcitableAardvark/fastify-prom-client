const fp = require('fastify-plugin')
const prometheus = require('prom-client')

const endTimer = Symbol('endTimer')

module.exports = fp((instance, opts, next) => {
  const metric = opts.metric || new prometheus.Histogram({
    name: 'http_request_buckets_milliseconds',
    help: 'request duration buckets in milliseconds'
  })

  instance.addHook('onRequest', (req, res, next) => {
    req[endTimer] = metric.startTimer()
    next()
  })

  instance.addHook('onSend', (request, reply, payload, next) => {
    request.req[endTimer]()
    next()
  })

  next()
}, '>= 0.31')
