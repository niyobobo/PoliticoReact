import initialState from '../store/initialState';
import {
  FETCH_REPOS,
  FETCH_REPOS_FAIL,
  FETCH_REPOS_SUCCESS
} from '../actions/actionTypes';

export default function (state = initialState, action) {
  const {
    type,
    payload
  } = action;
  switch (type) {
    case FETCH_REPOS:
      return state;
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        repository: payload
      };
    case FETCH_REPOS_FAIL:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};