const SET = 'post/SET';

const initState = {}

export default function reducer(state=initState, action) {
  let editState = Object.assign({}, state);
  switch(action.type) {

    case SET:
      editState = action.post;
      return Object.assign({}, state, editState);

    default: return state;
  }
}

export function setPost(post) {
  return {
    type: SET,
    post: post
  }
}
