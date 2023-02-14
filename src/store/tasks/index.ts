import { slice } from './slice';
import { tasksSaga } from './saga';
import { actions as tasksActions } from './actions';
import { selectors as tasksSelectors } from './selectors';

const tasksReducer = slice.reducer;

export {
  tasksActions,
  tasksReducer,
  tasksSaga,
  tasksSelectors,
};
