import {
    GET_USERS,
    ADD_USER,
    UPDATE_USER,
    EDIT_PROFILE,
} from '../actions/users';

const initialState = {
   
};

export default function(state = {...initialState}, action) {
    switch(action.type) {

        case GET_USERS:
        return {
            ...state,
        };

        case ADD_USER:
        return {
            ...state,
        };

        case UPDATE_USER:
        return {
            ...state,
        };

        case EDIT_PROFILE:
        return {
            ...state,
        };

        default:
        return state;
    }
}
