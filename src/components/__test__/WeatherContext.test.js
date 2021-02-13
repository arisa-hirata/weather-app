import React from 'react'
import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { WeatherContext, WeatherProvider } from '../context/WeatherContext';

global.fetch = jest.fn(() => {
    Promise.resolve({
        json: () =>
            Promise.resolve({
                value: "vancouver"
            }),
    })
});

describe("WeatherContext", () => {
    test('weather context', () => {

        const { getByText } = render(
            <WeatherProvider>
                <WeatherContext.Consumer>
                    {(value) => (
                        <span>Weather Context{value.forecast}</span>
                    )}
                </WeatherContext.Consumer>
            </WeatherProvider>
        );

        expect(getByText("Weather Context")).toBeTruthy();
    });
});
