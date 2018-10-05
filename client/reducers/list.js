const INIT = 'list/INIT';

const initState = {
  items: []
};

export default function reducer(state=initState, action) {

  let editState = Object.assign({}, state);
  let payload = action.payload;

  switch(action.type) {

    case INIT:
      editState.items = payload;
      return Object.assign({}, state, editState);

    default: return state;

  }

}

export function initializeList(list) {
  return {
    type: INIT,
    payload: list
  }
}
