import { mount } from "enzyme";
import { AuthContext } from "../../components/auth/AuthContext";
import { types } from "../../components/types/types";

describe('Pruebas en el <LoginScreen/>', () => {
    const history = {
        replace: jest.fn()
    }
    const contexTest = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }
    const wrapper = mount( 
        <AuthContext.Provider value={ contexTest }>
            <LoginScreen history={ history } /> 
        </AuthContext.Provider>
    );
    test('Debe mostrarse correctamente.', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    test('Debe de realizar el dispatch y la navegación', () => {
        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();
        expect( contexTest.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Daniel'
            }
        }); 
        expect( history.replace ).toHaveBeenCalledWith('/');
        localStorage.setItem('lastpath', '/dc');
        handleClick();
        expect( history.replace ).toHaveBeenCalledWith('/dc');
    });
});
