import { combineReducers } from './packages';
import post from './reducers/post';
import user from './reducers/user';

export default combineReducers({
  post, user
});
