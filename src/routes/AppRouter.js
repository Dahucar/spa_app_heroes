import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { AuthContext } from '../components/auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
//import { MarvelScreen } from '../components/marvel/MarvelScreen';
// import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <Router>
          <div>
            {/* <Navbar /> */}
            <Switch>
                <PublicRoute 
                    isAuthenticated={ user.logged } 
                    exact path="/login" 
                    component={ LoginScreen } 
                />

                {/* Si la ruta no coincide con los casos anteriores se 
                pasa al caso de las rutas hijas. */}
                <PrivateRoute 
                    isAuthenticated={ user.logged } 
                    path="/" 
                    component={ DashboardRouter } 
                />
            </Switch>
          </div>
        </Router>
    )
}
