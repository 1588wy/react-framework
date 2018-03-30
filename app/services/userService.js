/*
 * @Author: wying 
 * @Date: 2017-12-04 16:22:19 
 * @Last Modified by: wying
 * @Last Modified time: 2017-12-04 16:46:58
 */
import { sendRequest } from '../axios/requestUtil';
import { serverConfig } from '../constants/serverConfig'

export const getUserList = userId => {
    let param = {
        url: serverConfig.GET_USER_INFO,
        method: 'get',
        data: {
            // id: userId
        }
    };
    return sendRequest(param);
};