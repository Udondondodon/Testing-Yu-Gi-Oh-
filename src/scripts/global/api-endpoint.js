import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}?&startdate=01/01/2016&enddate=01/01/2017&dateregion=tcg_date`,
  DETAIL: (id) => `${CONFIG.BASE_URL}id=${id}`,
};

export default API_ENDPOINT;
