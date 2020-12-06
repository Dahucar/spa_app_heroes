import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

// las props definidas en un componente de navegación son cargadas por defecto.
export const LoginScreen = ({ history }) => {
    const { dispatch } = useContext( AuthContext );
    const handleLogin = () => {
        //Obteniedo una posible ultima ruta guardada.
        let lastPath = localStorage.getItem('lastpath');
        let realPath = lastPath === null ? '/' : lastPath;
        // Redirecciona a la ruta indicada.
        //history.push('/marvel');
        
        // enviando la data al reducer 
        dispatch({
            type: types.login,
            payload: {
                name: 'Daniel'
            }
        });

        // Redirecciona a la ruta indicada borrando la historia. 
        history.replace(realPath);
    }
    return (
        <div className="card">
            <div className="card-body">
                <h2>Login.</h2>
            </div>
            <div className="card-footer">
                <button className="btn btn-success"
                    onClick={ handleLogin }>
                    Login.
                </button>
            </div>
        </div>
    )
}
