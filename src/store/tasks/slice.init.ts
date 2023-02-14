import type { TTasksState } from './slice.interface';

const initialState: TTasksState = {
  tasks: [],
  loading: false,
};

export {
  initialState
};
