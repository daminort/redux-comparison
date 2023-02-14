import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { uiRoutes } from 'constants/ui.routes';

import { Effects } from 'pages/Effects';
import { Async } from 'pages/Async';
import { ReduxSaga } from 'pages/ReduxSaga';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Effects />,
  },
  {
    path: uiRoutes.rtkEffects,
    element: <Effects />,
  },
  {
    path: uiRoutes.rtkAsync,
    element: <Async />,
  },
  {
    path: uiRoutes.reduxSaga,
    element: <ReduxSaga />,
  },
]);

export {
  router,
};
