//import { connectSocket } from '../actions/app';
import {
    LOGIN_USER,
    RESTORE_LOGIN,
    LOGOUT,
} from '../actions/app';

const initialState = {
    unresolved: true,
    authorized: false,
    user: null,
    access_token: "",
    refresh_token: "",
};

export default function(state = {...initialState}, action) {
    switch(action.type) {

        case LOGIN_USER:

            if( action.payload && action.payload.status === 200 ) {

                return {...state,
                    unresolved: false,
                    authorized: true,
                    access_token: action.payload.data.access_token,
                    refresh_token: action.payload.data.refresh_token
                };

            } else {

                return {...state,
                    unresolved: true,
                    authorized: false,
                    access_token: "",
                    refresh_token: ""
                };

            }
        case RESTORE_LOGIN:

            return {...state,
                unresolved: action.payload.unresolved,
                authorized: action.payload.authorized,
                access_token: action.payload.access_token,
                refresh_token: action.payload.refresh_token
            };
        case LOGOUT:
            return initialState
        default:
            return state;
    }


}
