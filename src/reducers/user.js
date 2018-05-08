const initialState = {
  id: undefined,
  username: undefined,
  first_name: undefined,
  last_name: undefined,
  created_at: undefined,
  updated_at: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {...state};
    default:
      return state;
  }
}
