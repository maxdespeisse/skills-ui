import GenericApi from './GenericApi';
import conf from '../conf';

const SkillsApi = {
  getSkillsByUser: username => {
    const url = conf.API_BASE_URL + conf.GET_USER_SKILL_URL;
    return GenericApi.get(url, conf.GET_USER_SKILL_API_KEY, { name: username });
  },

  postEvaluation: ({ username, skill, level }) => {
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
    return GenericApi.post(url, conf.POST_EVALUATION_API_KEY, data);
  },
};

export default SkillsApi;