const docsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'DOC_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'DOC_SUCCESS':
        return {
          ...state,
          loading: false,
          val: action.payload,
        };
      case 'DOC_FAIL':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        // case 'RESET_DATA':
        //   return {
        //     ...state,
        //     loading: false,
        //     val: [],
        //     error: null
        //   };
      default:
        return state;
    }
  };
  
  export default docsReducer;
  