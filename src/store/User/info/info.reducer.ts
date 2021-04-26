import {
    SET_USER_INFO_BEGIN,
    SET_USER_INFO_SUCCESS,
    SET_USER_INFO_ERROR,
  } from './info.action';
  import { UserInfoState, UserInfoActionTypes } from './info.model';

const initialState: UserInfoState = {
  data: {
    email: '',
    phone: '',
    already_user: false,
  },
  loading: false,
  error: null,
};

export default function userInfoReducer(
  state: UserInfoState = initialState,
  action: UserInfoActionTypes
): UserInfoState {
  switch (action.type) {
    case SET_USER_INFO_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case SET_USER_INFO_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    case SET_USER_INFO_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
}
