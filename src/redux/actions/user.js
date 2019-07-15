import Axios from 'axios';
import  { actionDispatcher, axiosConfig } from '../../utils/dispatcher';
import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from './actionTypes';

export const userLogin = user => async(dispatch) => {
  dispatch(actionDispatcher(LOGIN_REQUEST));
  try {
    const URL = `${process.env.REACT_APP_API_URL}/auth/login`;
    const { data }  = await Axios.post(URL, user, axiosConfig);
    localStorage.setItem('token', data.data[0].token);
    const payload = {
      status: data.status,
      user: data.data[0].user,
    };
    return dispatch(actionDispatcher(LOGIN_SUCCESS, payload));
  } catch (error) {
    const { data } =  error.response;
    return dispatch(actionDispatcher(LOGIN_FAIL, data));
  }
};
