// Require the framework and instantiate it
import Fastify from 'fastify'
import productRoutes from './routes/products.routes.js'
import  './utils/mongo.connection.js'

const fastify = Fastify({
    logger: true
})

fastify.register(productRoutes)

fastify.get('/', (request, reply) => {
    reply.send({hello: 'world'})
})

// Run the server
// fastify.listen({ port: 3000 }, function (err, address){
//     if (err){
//         fastify.log.error(err)
//         process.exit(1)
//     } else {
//         fastify.log.info(`Server listening on ${fastify.server.address().port}`)
//     }
// })


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