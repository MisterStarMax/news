const initialState = {
  isLoged: JSON.parse(localStorage.getItem('isLoged')),
  error: {status: false, message: ''},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTORIZATION_SUCCESS':
      return{
        ...state,
        isLoged: true
      };
    case 'AUTORIZATION_ERROR':
      return{
        ...state,
        error: {status: true, message: action.payload}
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
