import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { TTask } from 'interfaces/tasks.interface';

import { config } from 'constants/config';
import { apiRoutes } from 'constants/api.routes';

const slice = createApi({
  reducerPath: 'tasksAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: config.apiURL,
  }),
  tagTypes: ['tasks'],
  endpoints: builder => ({
    list: builder.query<TTask[], void>({
      query: () => apiRoutes.tasksList,
      providesTags: ['tasks'],
    }),
    complete: builder.mutation<TTask[], void>({
      query: () => ({
        url: apiRoutes.completeAll,
        method: 'POST'
      }),
      invalidatesTags: ['tasks'],
    }),
  }),
});

export {
  slice,
}
