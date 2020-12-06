import { types } from "../types/types";

export const authReducer = ( state = {}, action ) => {
    switch ( action.type ) {
        case types.login:
            console.log( 'soy el login:'+action.type);
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            console.log( 'soy el logout:'+action.type);
            return {
                logged: false
            }
        default:
            console.log( 'soy el default:'+action.type);
            return state;
    }
}