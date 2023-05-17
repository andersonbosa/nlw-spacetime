import fastify from 'fastify'


const serverInstance = fastify()


serverInstance.get('/', (_request, reply) => {
  reply.send('I want to fuck, Sarah!')
})


serverInstance.listen({ port: 3000 })
  .then(() => {
    console.log('🐢 Fastify HTTP Server running at "http://localhost:3000"')
  })
