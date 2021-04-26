import {
  SET_USER_INFO_BEGIN,
  SET_USER_INFO_SUCCESS,
  SET_USER_INFO_ERROR,
} from './info.action';

export interface UserInfo{
    email: string;
    phone: string;
    already_user: boolean;
}

//STATE
export interface UserInfoState {
    data: UserInfo;
    error: any;
    loading: boolean;
}

//ACTIONS
export interface SetUserInfoBeginAction {
    type: typeof SET_USER_INFO_BEGIN;
}
  
export interface SetUserInfoSuccessAction {
  type: typeof SET_USER_INFO_SUCCESS;
  payload: { data: UserInfo };
}

export interface SetUserInfoErrorAction {
  type: typeof SET_USER_INFO_ERROR;
  payload: { error: any };
}
  
  // TYPE with all actions
  export type UserInfoActionTypes =
    | SetUserInfoBeginAction
    | SetUserInfoSuccessAction
    | SetUserInfoErrorAction;