import GenericApi from './GenericApi';
import conf from '../conf';

const SkillService = {
  getByUser: function(username) {
    const url = conf.API_BASE_URL + conf.GET_USER_SKILL_URL;
    return GenericApi.get(url, {
      name: username,
      code: conf.GET_USER_SKILL_CODE
    });
  }
};

export default SkillService;