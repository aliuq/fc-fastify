import { FastifyInstance } from 'fastify'
import * as path from 'path'
import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload'

export type Options = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>

export default async function (fastify: FastifyInstance, opts: Options) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
