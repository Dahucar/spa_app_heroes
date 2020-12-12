import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router-dom";
import { SearchScreen } from "../../components/search/SearchScreen";

describe('Pruebas en <SearchScreen/>', () => {
    test('Debe de mostrarse correctamente con valores por defecto.', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/search' ]}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('button').exists() ).toBe( true );
    })
    test('Debe de mostrar el heroe buscado y el input con el valor correcto.', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/search?q=batman' ]}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );
        expect( wrapper.find('input').prop('value') ).toBe( 'batman' );
        expect( wrapper ).toMatchSnapshot();
    })
    test('Debe de saber si no hay resultados de busqueda de heroe.', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/search?q=batman1' ]}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );
        expect( wrapper.find('input').prop('value') ).toBe( 'batman1' );
        expect( wrapper.find('.my-card').exists() ).toBe( false );
        expect( wrapper ).toMatchSnapshot();
    })
    test('Debe de llamar el PUSH del histoy.', () => {
        const history = {
            push: jest.fn()
        }
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/search?q=batman1' ]}>
                <Route 
                    path="/search" 
                    component={ () => <SearchScreen history={ history }/> } 
                />
            </MemoryRouter>
        );
        wrapper.find('input').simulate('changue', {
            target: {
                name: 'search',
                value: 'batman1'
            }
        });
        wrapper.find('form').prop('onSubmit')({
            preventDefault();
        });
        expect( history.push ).toHaveBeenCalledWith('?q=batman1');
    })
})
