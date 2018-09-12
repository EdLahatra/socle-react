import axios from 'axios';
import base64 from 'base-64';
import config from '../config';

export const USER_CONNECT_START = 'USER_CONNECT_START';
export const USER_CONNECT_SUCCESS = 'USER_CONNECT_SUCCESS';
export const USER_CONNECT_FAIL = 'USER_CONNECT_FAIL';
export const USER_REGISTER_START = 'USER_REGISTER_START';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';
export const USER_LOGOUT = 'USER_LOGOUT';

export const userConnect = ({ email, password }) => {
  const emailPassword = `${email}:${password}`;
  return (dispatch) => {
    dispatch({
      type: USER_CONNECT_START,
    });

    axios({
      method: 'get',
      url: `${config.serverUrl}/authenticate`,
      headers: {
        Authorization: `Basic ${base64.encode(emailPassword)}`,
      },
    })
      .then((result) => {
        dispatch({
          type: USER_CONNECT_SUCCESS,
          data: result.data,
        });

        //Stock token in localStorage 
        localStorage.setItem("_token", result.data.access_token);
        dispatch(fetchPlaces());
      })
      .catch(() => {
        dispatch({
          type: USER_CONNECT_FAIL,
        });
      });
  };
};

export const userRegister = data =>
  (dispatch) => {
    dispatch({ type: USER_REGISTER_START });
    axios({
      method: 'post',
      url: config.serverUrl,
      data,
    })
      .then(() => {
        dispatch({ type: USER_REGISTER_SUCCESS });
      })
      .catch(() => {
        dispatch({ type: USER_REGISTER_FAIL });
      });
  };

export const userLogout = () => ({
  type: USER_LOGOUT,
});

