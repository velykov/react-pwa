import AppConfig from 'AppConfig';
import axios from 'axios';
import { getToken } from './../jwt';

export const REGISTRATION_INTRO_POST = 'REGISTRATION_INTRO_POST';
export const REGISTRATION_INTRO_SUCCESS = 'REGISTRATION_INTRO_SUCCESS';
export const REGISTRATION_INTRO_FAIL = 'REGISTRATION_INTRO_FAIL';

export const postIntro = (formData) => (dispatch) => {
  dispatch({
    type: REGISTRATION_INTRO_POST,
    data: formData,
  });

  return axios.post(`${AppConfig.ServerApi}/users/signup/intro`,
    formData,
    { headers: { 'Authorization': getToken() } })
    .then(({data: { success, data }}) => {
      dispatch({
        type: REGISTRATION_INTRO_SUCCESS,
        success,
        data,
      });
    })
    .catch((res) => {
      const { success, error } = (res instanceof Error) ? res.response.data : res;
      dispatch({
        type: REGISTRATION_INTRO_FAIL,
        success,
        error,
      });
    });
};
