const translatedReducer = (state = {}, action) => {
    switch (action.type) {
      case 'TRANSLATE_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'TRANSLATE_SUCCESS':
        return {
          ...state,
          loading: false,
          val: action.payload,
        };
      case 'TRANSLATE_FAIL':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case 'resetData':
          return {
            ...state,
            loading: false,
            val: [],
            error: null
          };
      default:
        return state;
    }
  };
  
  export default translatedReducer;
  