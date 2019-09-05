import axios from 'axios';

const GenericApi = {

  get: (url, apiKey, queryParams) => {
    console.log('apiKey', apiKey);
    return axios.get(url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'x-functions-key': apiKey,
      },
      params: queryParams,
   });
  },

  post: (url, apiKey, data, queryParams) => {
    console.log('apiKey', apiKey);
    return axios.post(url, data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'x-functions-key': apiKey,
      },
      params: queryParams,
    });
  }
};

export default GenericApi;