import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';

// Componentes
import { DcScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroesScreen } from '../components/heroes/HeroesScreen';

export const DashboardRouter = () => {
    return (
        <>
            {/* Componente que se mostrará en todas las rutas definidas mas abajo. */}
            <Navbar />
            <div>
                {/* Como estas son rutas hijas de "AppRouter" no incluyen el Router */}
                <Switch>
                    <Route exact path="/marvel" component= { MarvelScreen } />
                    <Route exact path="/heroe/:heroeId" component= { HeroesScreen } />
                    <Route exact path="/dc" component= { DcScreen } />

                    {/* Si no cumple ningún de los casos anteriores */}
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
