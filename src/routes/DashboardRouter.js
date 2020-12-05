import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';

// Componentes
import { DcScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroesScreen } from '../components/heroes/HeroesScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRouter = () => {
    return (
        <>
            {/* Componente que se mostrará en todas las rutas definidas mas abajo. */}
            <Navbar />
            <div className="container-fluid mt-3">
                {/* Como estas son rutas hijas de "AppRouter" no incluyen el Router */}
                <Switch>
                    <Route exact path="/marvel" component= { MarvelScreen } />
                    <Route exact path="/hero/:heroeId" component= { HeroesScreen } />
                    <Route exact path="/dc" component= { DcScreen } />
                    <Route exact path="/search" component= { SearchScreen } />

                    {/* Si no cumple ningún de los casos anteriores */}
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
