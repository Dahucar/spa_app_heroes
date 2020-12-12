import { mount, shallow } from "enzyme";
import { AuthContext } from "../../components/auth/AuthContext";

describe('Pruebas en <AppRouter />', () => {
    const contexTest = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }
    test('Debe de mostrar el login si no estoy autenticado.', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contexTest } >
                <AppRouter />
            </AuthContext.Provider>
        );       
        expect( wrapper ).toMatchSnapshot(); 
    });
    test('Debe de mostrar el componente de Marvel si esta autenticado.', () => {
        const contexTest = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Daniel'
            }
        }
        const wrapper = mount(
            <AuthContext.Provider value={ contexTest } >
                <AppRouter />
            </AuthContext.Provider>
        );
        expect( wrapper.find('.navbar').exists() ).toBe( true );
    });
});
