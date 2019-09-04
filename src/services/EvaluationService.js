import GenericApi from './GenericApi';
import conf from '../conf';

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
    const url = conf.API_BASE_URL + conf.POST_EVALUATION_URL;
    return GenericApi.post(url, data, { code: conf.POST_EVALUATION_CODE });
  }
};

export default EvaluationService;
