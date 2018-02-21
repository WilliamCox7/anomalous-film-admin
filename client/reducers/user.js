const SET = 'user/SET';

const initState = {}

export default function reducer(state=initState, action) {
  let editState = Object.assign({}, state);
  switch(action.type) {

    case SET:
      editState = action.user;
      return Object.assign({}, state, editState);

    default: return state;
  }
}

export function setUser(user) {
  return {
    type: SET,
    user: user
  }
}
