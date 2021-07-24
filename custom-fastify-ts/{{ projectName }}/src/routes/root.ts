import { FastifyPluginAsync } from 'fastify'

const Root: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })
}
export default Root
