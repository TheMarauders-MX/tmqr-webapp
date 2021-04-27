import {
    UserInfo,
    SetUserInfoBeginAction,
    SetUserInfoSuccessAction,
    SetUserInfoErrorAction,
  } from './info.model';
  
export const SET_USER_INFO_BEGIN = 'SET_USER_INFO_BEGIN';
export const SET_USER_INFO_SUCCESS = 'SET_USER_INFO_SUCCESS';
export const SET_USER_INFO_ERROR = 'SET_USER_INFO_ERROR';
  
export const setUserInfoBegin = (): SetUserInfoBeginAction => ({
    type: SET_USER_INFO_BEGIN,
  });
  
  export const setUserInfoSuccess = (
    userInfo: UserInfo
  ): SetUserInfoSuccessAction => ({
    type: SET_USER_INFO_SUCCESS,
    payload: { data: userInfo },
  });
  
  export const setUserInfoError = (error: any): SetUserInfoErrorAction => ({
    type: SET_USER_INFO_ERROR,
    payload: { error },
  });