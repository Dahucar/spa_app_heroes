import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouter } from './DashboardRouter';
//import { MarvelScreen } from '../components/marvel/MarvelScreen';
// import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
    return (
        <Router>
          <div>
            {/* <Navbar /> */}
            <Switch>
                <Route exact path="/login" component={ LoginScreen } />

                {/* Si la ruta no coincide con los casos anteriores se 
                pasa al caso de las rutas hijas. */}
                <Route path="/" component={ DashboardRouter } />
            </Switch>
          </div>
        </Router>
    )
}
