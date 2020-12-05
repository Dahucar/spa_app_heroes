import { heroes } from '../../data/heroes'
export const HeroesByName = ( name = '') => {
    console.log('buscando.');
    if ( name === '' ) {
        return [];
    }
    name = name.toLocaleLowerCase();
    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes( name ));
}
