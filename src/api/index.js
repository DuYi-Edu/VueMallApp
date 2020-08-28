import Axios from 'axios';
import baseURL, { URLS } from './URLS';

const appkey = 'dd_1597654682810';

const request = Axios.create({
  baseURL,
  params: {
    appkey,
  },
});
request.interceptors.response.use((value) => value.data);

const getSideList = (type) => request.get(
  URLS.getSide,
  { params: { type } },
);

export default {
  getSideList,
};
