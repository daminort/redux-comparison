import { config } from 'constants/config';

const { apiURL } = config;

const apiRoutes = {
  tasksList: `${apiURL}/list`,
  completeAll: `${apiURL}/complete`,
}

export {
  apiRoutes,
}
