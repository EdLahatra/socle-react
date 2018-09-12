import axios from 'axios';

import config from '../config';

const callApi = (method, url, Authorization) => axios({
    method,
    url: `${config.serverUrl}/${url}`,
    headers: {
      Authorization,
    },
  });

export default callApi;