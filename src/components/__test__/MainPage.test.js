import { render, screen, cleanup } from '@testing-library/react';
import MainPage from '../MainPage';
import { WeatherProvider, WeatherContext } from '../context/WeatherContext';

afterEach(cleanup);

describe('MainPage', () => {
    test("should show spinner before fetching data", async () => {

        const { container } =render(
            <WeatherProvider>
                <WeatherContext.Consumer>
                    {(value) => (
                        <MainPage forecast={value}/>
                    )}
                </WeatherContext.Consumer>
            </WeatherProvider>
        )

        expect(container.firstChild.classList.contains('main-page')).toBe(true);
        expect(container.firstChild.firstChild.classList.contains('spinner')).toBe(true);
    });

    test('should be composed props by WeatherProvider', () => {

        const customRender = (ui, { providerProps, ...renderOptions }) => {
            return render(
                <WeatherContext.Provider {...providerProps}>
                    {ui}
                </WeatherContext.Provider>,
                renderOptions
            )
        }

        const providerProps = {
            value: 'forecast'
        }

        customRender(
            <WeatherContext.Consumer>
                {(value) => <span>Received: {value}</span>}
            </WeatherContext.Consumer>,
            { providerProps }
        )

        expect(screen.getByText(/^Received:/).textContent).toBe('Received: forecast');
    });
});
