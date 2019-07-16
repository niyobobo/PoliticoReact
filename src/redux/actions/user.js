import Axios from 'axios';
import { CUSTOM_AVATAR, BASE_URL } from '../../constants';
import  { actionDispatcher, axiosConfig } from '../../utils/dispatcher';
import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS
} from './actionTypes';

export const userLogin = user => async(dispatch) => {
  dispatch(actionDispatcher(LOGIN_REQUEST));
  try {
    const URL = `${BASE_URL}/auth/login`;
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

export const registerUser = user => async(dispatch) => {
  dispatch(actionDispatcher(SIGNUP_REQUEST));
  try {
    const URL = `${BASE_URL}/auth/signup`;
    const body = {
      firstname: user.firstName,
      lastname: user.lastName,
      othername: `${user.firstName.slice(0,1)}${user.lastName.slice(0,1)}`,
      phoneNumber: "+25783000000",
      passportUrl: CUSTOM_AVATAR,
      isAdmin: true,
      email: user.email,
      password: user.password,
    }
    const { data } = await Axios.post(URL, body, axiosConfig);
    const payload = {
      status: data.status,
      email: user.email,
      message: 'Successfully created the account'
    };
    return dispatch(actionDispatcher(SIGNUP_SUCCESS, payload));
  } catch (error) {
    return dispatch(actionDispatcher(SIGNUP_FAIL, error.response.data));
  }
}
