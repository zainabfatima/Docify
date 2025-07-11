const generatedReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GENERATE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GENERATE_SUCCESS':
      return {
        ...state,
        loading: false,
        val: action.payload,
      };
    case 'GENERATE_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };


    default:
      return state;
  }
};

export default generatedReducer;
