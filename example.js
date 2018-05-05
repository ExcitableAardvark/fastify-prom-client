const fastify = require('fastify')()
const prometheus = require('prom-client')

// fastify.register(require('fastify-prom-client'))
fastify.register(require('./'))

fastify.get('/', (request, reply) => {
  setTimeout(() => {
    reply.send('Hello, World!')
  }, Math.random() * 1000)
})

fastify.get('/metrics', (request, reply) => {
  reply.send(prometheus.register.metrics())
})

fastify.listen(0, (err) => {
  if (err) throw err
  console.log('Listening on http://localhost:%d', fastify.server.address().port)
  console.log('Metrics available at http://localhost:%d/metrics', fastify.server.address().port)
})
