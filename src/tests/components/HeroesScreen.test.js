import { shallow, mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import { HeroesScreen } from "../../components/heroes/HeroesScreen";

describe('Pruebas en <HeroesScreen/>', () => {
    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }
    const wrapper = mount(
        <MemoryRouter initialEntries={ ['/hero'] } >
            <HeroesScreen history={ history} />
        </MemoryRouter>
    );
    test('Debe de mostrar el componente <Redirect/> si no hay argumentos en la URL.', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('Redirect').exists() ).toBe( true );
    });
    test('Debe de mostrar un hero si su id existe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['hero/marvel-captain'] } >
                <Route path="/hero/:heroeId" component={ HeroesScreen } />
            </MemoryRouter>
        );
        expect( wrapper.find('.row').exists() ).toBe( true );
    });
    test('Debe de regresar a la pantalla anterior con PUSH', () => {
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['hero/marvel-captain'] } >
                <Route 
                    path="/hero/:heroeId" 
                    component={ () => <HeroesScreen history={ history } /> } 
                />
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();
        expect( history.push ).toHaveBeenCalledWith('/');
        expect( history.goBack ).not.toHaveBeenCalled();
    });
    test('Debe regresar a la pantalla anterior con GoBack', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['hero/marvel-captain'] } >
                <Route 
                    path="/hero/:heroeId" 
                    component={ () => <HeroesScreen history={ history } /> } 
                />
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();
        expect( history.push ).toHaveBeenCalledTimes(0);
        expect( history.goBack ).toHaveBeenCalled();
    });
});
