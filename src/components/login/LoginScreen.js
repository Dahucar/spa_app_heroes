import React from 'react'

// las props definidas en un componente de navegación son cargadas por defecto.
export const LoginScreen = ({ history }) => {
    const handleLogin = () => {
        // Redirecciona a la ruta indicada.
        //history.push('/marvel');
        // Redirecciona a la ruta indicada borrando la historia. 
        history.replace('/');
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
