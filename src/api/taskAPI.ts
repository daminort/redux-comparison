import type { TTask } from 'interfaces/tasks.interface';
import { apiRoutes } from 'constants/api.routes';

async function getTasks(): Promise<TTask[]> {
  return fetch(apiRoutes.tasksList).then(res => res.json());
}

async function completeAll(): Promise<TTask[]> {
  return fetch(apiRoutes.completeAll, {
    method: 'post',
  }).then(res => res.json());
}

const tasksAPI = {
  getTasks,
  completeAll,
}

export {
  tasksAPI,
}
