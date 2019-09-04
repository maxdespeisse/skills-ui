const conf = {
  API_BASE_URL: process.env.REACT_APP_API_URL,
  GET_USER_SKILL_URL: '/GetUserSkillFunction',
  GET_USER_SKILL_CODE: process.env.REACT_APP_GET_USER_SKILL_CODE,
  POST_EVALUATION_URL: '/AddEvaluationFunction',
  POST_EVALUATION_CODE: process.env.REACT_APP_POST_EVALUATION_CODE,
};

console.debug('env variables', process.env);
console.debug('conf', conf);

export default conf;
