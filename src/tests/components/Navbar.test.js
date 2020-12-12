const { mount } = require("enzyme");
const { MemoryRouter, Route } = require("react-router-dom");
const { AuthContext } = require("../../components/auth/AuthContext");
const { types } = require("../../components/types/types");
const { Navbar } = require("../../components/ui/Navbar");

describe('Prueba en <Navbar/>', () => {
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: jest.fn(),
        listen: jest.fn(),
        createHref: jest.fn(),
    }
    const contexTest = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Daniel'
        }
    }
    const wrapper = mount(
        <AuthContext.Provider value={ contexTest }>
           <MemoryRouter>
                <Route history={ historyMock }>
                    <Navbar/>
                </Route>
           </MemoryRouter>
        </AuthContext.Provider>
    );
    test('Debe de mostrarse correctamente.', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe( 'Daniel' );
    });
    test('Debe de llamar el logout y usar el history', () => {
        wrapper.find('button').prop('onClick');
        expect( contexTest.dispatch ).toHaveBeenCalledWith( types.logout ); 
        expect( historyMock.replace ).toHaveBeenCalledWith('/login');
    });
});
