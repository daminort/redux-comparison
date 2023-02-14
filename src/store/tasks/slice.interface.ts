import type { TTask } from 'interfaces/tasks.interface';

interface TTasksState {
  tasks: TTask[];
  loading: boolean;
}

export type {
  TTasksState,
}
