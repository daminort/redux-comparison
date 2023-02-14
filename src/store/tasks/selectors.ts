import { createSelector } from '@reduxjs/toolkit';

import type { IRootState } from 'store/index'

const tasks = (state: IRootState) => state.tasks.tasks;
const loading = (state: IRootState) => state.tasks.loading;

const getTasks = createSelector([tasks], (tasks) => tasks);
const getLoading = createSelector([loading], (loading) => loading);

const selectors = {
  getTasks,
  getLoading,
};

export {
  selectors,
}
