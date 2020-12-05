import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroesScreen = ({ history }) => {
    // hooks del Router de navegacion que permite obtener todos los parametros de la URL.
    const { heroeId } = useParams();
    const hero = useMemo(() => getHeroesById( heroeId ), [ heroeId ])
    // si no encontro el heroe por su Id 
    if ( !hero ) {
        return <Redirect to="/" />
    }
    const {  
        superhero,
        alter_ego,
        publisher,
        first_appearance,
        characters
    } = hero;
    const handleReturn = () =>{
        if ( history.length <= 2 ) {
            //Vuelve a la url inicial
            history.push('/');            
        }else{
            //Vuelve a la url anterior.
            history.goBack();
        }
    }
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    className="img-thumbnail"
                    alt={ superhero }
                    src={ `../assets/heroes/${ heroeId }.jpg` }
                />
            </div>
            <div className="col-8">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b> { alter_ego } </li>
                    <li className="list-group-item"><b>Publisher: </b> { publisher } </li>
                    <li className="list-group-item"><b>First appearence: </b> { first_appearance } </li>
                </ul>
                <h5>Characters</h5>
                <p> { characters } </p>
                <button 
                    className="btn btn-info"
                    onClick={ handleReturn }
                >
                    Return.
                </button>
            </div>
        </div>
    )
}
