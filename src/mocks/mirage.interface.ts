import type { Server, Registry } from 'miragejs';
import type { ServerConfig } from 'miragejs/server';

const models = {}
const factories = {};

type TServerRegistry = Registry<typeof models, typeof factories>;
type TServerConfig = ServerConfig<typeof models, typeof factories>;
type TServer = Server<TServerRegistry>;

export type {
  TServerRegistry,
  TServer,
  TServerConfig,
}
