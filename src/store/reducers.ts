import { tasksReducer } from './tasks';
import { tasksAPI } from './tasksAPI';

const rootReducer = {
  tasks: tasksReducer,
  [tasksAPI.reducerPath]: tasksAPI.reducer,
};

export {
  rootReducer,
};
