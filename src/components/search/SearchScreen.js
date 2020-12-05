import React, { useMemo } from 'react';
import queryString from 'query-string'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { HeroesByName } from '../heroes/HeroesByName';

export const SearchScreen = ({ history }) => {
    // hooks que obtiene los parametros de la URL
    const locationUrl = useLocation(); 
    // libreria con la que se desectructura los parametros de la url.
    const { q = ''} = queryString.parse( locationUrl.search );
    // custom hook.
    const [formValues, handleInputChangue ] = useForm({
        search: q,
    });
    const { search } = formValues;
    //funcion submit del formulario.
    const handleSearch = ( e ) => {
        e.preventDefault();
        history.push(`?q=${ search }`);
    }
    // recordando el ultimo valor guardado para evitar realizar la funcionalidad repetidamente.
    const heroesFiltered = useMemo(() => HeroesByName( q ), [ q ])
    return (
        <> 
            <div className="row">
                <div className="col-12">
                    <form onSubmit={ handleSearch } className="mt-4"> 
                        <div className="input-group">
                            <input 
                                type="text"
                                placeholder="Find your Hero"
                                className="form-control"
                                name="search"
                                autoComplete="off"
                                value={ search }
                                onChange={ handleInputChangue }
                            />
                            <div className="input-group-append"> 
                                <button 
                                    type="submit"
                                    className="btn btn-outline-success" 
                                >
                                    Search...
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <hr />
                    {
                        heroesFiltered.map( hero => (
                            <HeroCard
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
