import { createServer } from 'miragejs';

import { config } from 'constants/config';
import { apiRoutes } from 'constants/api.routes';

import type { TTask } from 'interfaces/tasks.interface';
import type { TServer, TServerConfig } from './mirage.interface';

const tasks: TTask[] = [
  { id: '1', name: 'Buy milk', done: false },
  { id: '2', name: 'Feed cat', done: false },
  { id: '3', name: 'Wash car', done: false },
];

const createMirage = (): TServer => {

  const serverConfig: TServerConfig = {
    routes() {
      this.urlPrefix = config.apiURL;
      this.timing = 2500;
    },
  }

  const server = createServer(serverConfig);

  // GET
  server.get(apiRoutes.tasksList, () => {
    return tasks;
  });

  // POST
  server.post(apiRoutes.completeAll, () => {
    return tasks.map(item => ({
      ...item,
      done: true,
    }));
  });

  return server;
};

export {
  createMirage,
}
