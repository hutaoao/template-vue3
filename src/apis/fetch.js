/**
 * 网络请求
 */
import axios from 'axios';
import {message} from 'ant-design-vue';

const request = axios;
let cancelTokenSource = axios.CancelToken.source();
//请求拦截器
axios.interceptors.request.use(async (config) => {
  const token = sessionStorage.getItem("token")
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'token': token
  };
  config.cancelToken = cancelTokenSource.token;
  return {...config, headers};
}, function (error) {
  return Promise.reject(error);
});

//响应拦截器
axios.interceptors.response.use((response) => {
    const {data} = response;
    if (data instanceof Blob) {
      return response;
    } else {
      if (data.code === 10007 || data.code === 10008 || data.code === 10009) {
        setTimeout(() => {
          window.location.href = '/login';
        }, 1000)
      }
      return data;
    }
  }, (error) => {
    message.error('网络错误，请稍后重试')
    return Promise.reject(error);
  }
);

export default request;
