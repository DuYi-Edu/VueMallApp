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

const getGoodsList = (type, page, size, sort) => request.get(
  URLS.getGoodsList,
  {
    params: {
      type, size, sort, page,
    },
  },
);
const likeSearch = (value) => request.get(
  URLS.likeSearch,
  { params: { likeValue: value } },
);

const search = (type, page, size) => request.get(
  URLS.search,
  { params: { type, page, size } },
);
export default {
  getSideList,
  getGoodsList,
  search,
  likeSearch,
};
