import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tasks-c4d55.firebaseio.com/'
});
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*';

export default instance;