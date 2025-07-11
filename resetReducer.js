import { RESET_DATA } from './actions';

const resetReducer = (state = {}, action) => {
    switch (action.type) {
        case RESET_DATA:
            return {};
        default:
            return state;
    }
};

export default resetReducer;
