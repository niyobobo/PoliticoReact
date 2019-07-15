import initialState from '../store/initialState';
import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
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
    case LOGIN_FAIL: {
      return {
        ...state,
        error: payload
      }
    }
    default:
      return state;
  }
};