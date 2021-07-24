import { FastifyPluginAsync } from 'fastify'

const Example: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get('/', async function (request, reply) {
    return 'this is an example'
  })
}
export default Example
