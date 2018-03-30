import * as ActionType from '../constants/ActionType';
import {serverConfig} from '../constants/serverConfig';
import { sendRequest } from '../axios/requestUtil';
/**
 * 保存用户权限列表
 * @param {*} param 参数
 */
// export const saveData = info => {
//     return {
//         type: ActionType.userType.GET_USER_AUTH_LIST,
//         info: info
//     };
// };
export function saveData(userId) {
    let param = {
        url: serverConfig.GET_USER_AUTH_LIST,
        method: 'get',
        data: {
            // id: userId
        }
    };
    return (dispatch, getState) => {
        return dispatch({
            type: ActionType.GET_USER_AUTH_LIST,
            promise: sendRequest(param)
        });
    };
}
