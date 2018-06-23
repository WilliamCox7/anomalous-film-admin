import { combineReducers } from './packages';
import post from './reducers/post';
import user from './reducers/user';
import list from './reducers/list';

export default combineReducers({
  post, user, list
});
