import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { TTask } from 'interfaces/tasks.interface';

import { sliceName } from './constants';
import { initialState } from './slice.init';

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<TTask[]>) => {
      state.tasks = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export {
  slice,
}
