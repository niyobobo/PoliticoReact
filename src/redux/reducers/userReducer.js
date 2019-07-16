import initialState from '../store/initialState';
import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from '../actions/actionTypes';

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return state;
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload
      };
    case LOGIN_FAIL: 
      return {
        ...state,
        error: payload
      };
    case SIGNUP_REQUEST:
      return {
        ...state
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        error: payload,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: payload,
      }
    default:
      return state;
  }
};