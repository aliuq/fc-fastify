'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return 'Fastify is running!'
  })
<% if (runtime) { %>
  // Remove this route before deploying
  fastify.get('/hello', async function (request, reply) {
    return { node_version: process.env.npm_config_node_version }
  })
<% } %>}
