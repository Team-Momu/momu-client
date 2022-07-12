import axios from 'axios';
import { METHOD } from '../utils/interfaces/fetcher/fetcher';

const backUrl: string = 'http://3.39.85.242';
axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

const fetcher = async (
  method: METHOD,
  url: string,
  ...rest: { [key: string]: any }[]
) => {
  const res = await axios[method](url, ...rest);
  return res.data;
};
export default fetcher;
