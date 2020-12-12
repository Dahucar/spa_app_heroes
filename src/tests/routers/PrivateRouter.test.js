import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { PrivateRoute } from "../../routes/PrivateRoute";

describe('Prueba en <PrivateRoute />', () => {
    const props = {
        location: {
            pathname: '/marvel'
        }
    }
    Storage.prototype.setItem = jest.fn();
    test('Debe de mostrar el componenete s esta autenticado y guardar en el localStorage', () => {
        // mount: problemas con react 17.
        // <Redirect /> : es un string vacio.
        const wrapper = mount( 
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ true }
                    component={ () => <span>Hola</span> }
                    { ...props }
                /> 
            </MemoryRouter>    
        );
        expect( wrapper.find('span').exists() ).toBe( true );
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastpath', '/marvel');
    });
    test('Debe de bloquear el componente si no esta autenticado.', () => {
        const wrapper = mount( 
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ false }
                    component={ () => <span>Hola</span> }
                    { ...props }
                /> 
            </MemoryRouter>    
        );            
        expect( wrapper.find('span').exists() ).toBe( false );
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastpath', '/marvel');
    });
});
