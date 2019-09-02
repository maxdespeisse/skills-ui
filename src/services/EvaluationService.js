import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

const EvaluationService = {
  post: function({ username, skill, level }) {
    const data = {
      user: {
        name: username
      },
      evaluation: {
        skill,
        level,
        date: (new Date()).toISOString(),
      }
    };
    axios.post(BASE_URL + '/AddEvaluationFunction', data)
      .then( response => {
        console.log(response);
      })
      .catch(error=> {
        console.log(error);
      });
  }
};

export default EvaluationService;
