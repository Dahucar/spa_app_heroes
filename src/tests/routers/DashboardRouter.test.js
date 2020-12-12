import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../components/auth/AuthContext";
import { DashboardRouter } from "../../routes/DashboardRouter";

describe('Prueba en <DashboardRouter />', () => {
    const contexTest = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Daniel'
        }
    }
    test('Debe hacer match con la instantanea.', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contexTest } >
                <MemoryRouter>
                    <DashboardRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Daniel');
    });
});
