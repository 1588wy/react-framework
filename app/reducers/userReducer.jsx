import * as ActionType  from '../constants/ActionType';

/**
 * 用户相关数据
 * @param state
 * @param action
 * @returns {*}
 */
const initialState = {
    loading: false,
    errno: '',
    errmsg: '',
    info: []
};
export default function userReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    // case ActionType.userType.GET_USER_AUTH_LIST:
    //   return Object.assign({}, state, {
    //     info: action.info
    //   });
    case ActionType.GET_USER_AUTH_LIST_REQUEST:
        return {
          ...state,
          loading: true,
          errno: '',
          errmsg: ''
        }
    case ActionType.GET_USER_AUTH_LIST_SUCCESS:
        return {
          ...state,
          info: action.json.obj,
          loading: false
        }
    case ActionType.GET_USER_AUTH_LIST_FAILURE:
        return {
          ...state,
          loading: false,
          errno: action.json.code,
          errmsg: action.json.message
        }
    default:
      return state;
  }
};
