import axios from 'axios';

const GenericApi = {

  get: (url, queryParams) => {
    return axios.get(url, {
      headers: {'Access-Control-Allow-Origin': '*'},
      params: queryParams,
   });
  },

  post: (url, data, queryParams) => {
    return axios.post(url, data, {
      headers: {'Access-Control-Allow-Origin': '*'},
      params: queryParams,
    });
  }
};

export default GenericApi;