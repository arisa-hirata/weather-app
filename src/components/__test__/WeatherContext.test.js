import React from 'react'
import { render, act, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { WeatherContext } from '../context/WeatherContext';

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <WeatherContext.Provider {...providerProps}>{ui}</WeatherContext.Provider>,
    renderOptions
  )
}

describe("WeatherContext", () => {
    test('renders weather data', async() => {
        const providerProps = {
            value: 'Clear',
        }

        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve({
                    json: () => Promise.resolve(providerProps)
                })
            })
        );

        await act(async () => {
            customRender(
                <WeatherContext.Consumer>
                    {(value) => <span>Weather is: {value}</span>}
                </WeatherContext.Consumer>,
                { providerProps }
            )
        });

        expect(screen.getByText(/^Weather is:/).textContent).toBe('Weather is: Clear');

        global.fetch.mockRestore();
    });
});
