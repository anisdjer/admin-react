import { FETCH_USERS_FULLFILLED } from "../constants";

const initialState = {
  user : {
    id: undefined,
    username: undefined,
    firstName: undefined,
    lastName: undefined,
    createdAt: undefined,
    updatedAt: undefined
  },
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_FULLFILLED:
      return {...state, list: action.payload};
    default:
      return state;
  }
}
