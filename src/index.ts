// Require the framework and instantiate it
import Fastify from 'fastify'
import productRoutes from './routes/products.routes'
import  './utils/mongo.connection'
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui'
const fastify = Fastify({
    logger: true
})


fastify.register(productRoutes)
fastify.register(fastifySwagger, {
  swagger: {
    info: {
      title: 'Documentation',
      version: '0.1.0'
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [{ name: "Products"}]
  }
})
fastify.register(fastifySwaggerUI, {
  routePrefix: '/docs',
   
});

fastify.ready(err => {
  if (err) throw err
  fastify.swagger()
})

// async/await to run the server
const start = async () => {
    try {
      await fastify.listen({ port: 3000 })
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()
  