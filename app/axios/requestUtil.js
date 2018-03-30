import 'whatwg-fetch';
import axios from 'axios';
import '../mock/mockData'
import { globalVar } from '../constants/GlobalVariable';


export function sendRequest(param) {
  return new Promise((resolve, reject) => {
    let params = param.data ? param.data : {};
    axios({
      url: param.url,
      method: param.method,
      body: params,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
      .then(function (response) {
        if (response.status == '200') {
          resolve(response.data);
        } else {
        }
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });
}
