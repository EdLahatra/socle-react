import {
  USER_CONNECT_START,
  USER_CONNECT_SUCCESS,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
} from '../actions/user';

const defaultState = {
  isFetching: false,
  isFetchingRegister: false,
  connected: false,
  access_token: '',
  user: {},
};

const user = (state = defaultState, action) => {
  switch (action.type) {
    case USER_CONNECT_START:
      return {
        ...state,
        isFetching: true,
      };
    case USER_CONNECT_SUCCESS:
      return {
        ...state,
        connected: true,
        isFetching: false,
        access_token: action.data.access_token,
      };
    case USER_REGISTER_START:
      return {
        ...state,
        isFetchingRegister: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        isFetchingRegister: false,
      };
    default:
      return state;
  }
};

export default user;
