import Axios from 'axios';
import { actionDispatcher, githubConfig } from '../../utils/dispatcher';
import { GITHUB_URL, GITHUB_TOKEN } from '../../constants/index';
import { 
  FETCH_REPOS, FETCH_REPOS_FAIL, FETCH_REPOS_SUCCESS,
} from '../actions/actionTypes';

export const getRepository = () => async(dispatch)=>{
  dispatch(actionDispatcher(FETCH_REPOS));
  try {
    const { data } =  await Axios.get(GITHUB_URL, githubConfig(GITHUB_TOKEN));
    return dispatch(actionDispatcher(FETCH_REPOS_SUCCESS, data));
  } catch (error) {
    return dispatch(actionDispatcher(FETCH_REPOS_FAIL, error.response.data));
  }
}