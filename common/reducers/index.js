import { combineReducers } from 'redux';
import user from './user';

const app = combineReducers({
  log: (_, action) => {
    // eslint-disable-next-line no-console
    console.log(action);
    return {};
  },
  user,
});

export default app;
