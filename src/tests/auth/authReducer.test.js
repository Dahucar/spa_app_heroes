import { authReducer } from "../../components/auth/authReducer";
import { types } from "../../components/types/types";

describe('Pruebas en el authReducer', () => {
    test('Debe de retornar el estado por defecto.', () => {
        const state = authReducer({ logged: false }, {});
        expect( state ).toEqual( { logged: false } );     
    });
    test('Debe de autenticar y colocar el name del usuario.', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Daniel'
            }
        }
        const state = authReducer({ logged: false }, action);
        expect( state ).toEqual({ logged: true, name: 'Daniel' });
    });
    test('Debe de borrar el name del usuario y logout en false.', () => {
        const action = {
            type: types.logout,
        }
        const state = authReducer({ logged: true, name: 'pedro' }, action);
        expect( state ).toEqual({ logged: false });
    });
});
