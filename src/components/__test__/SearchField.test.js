import React from 'react';
import { render, screen, fireEvent, act, cleanup } from '@testing-library/react';
import SearchField from '../SearchField';
import { WeatherProvider, WeatherContext } from '../context/WeatherContext';

describe('SearchField', () => {

    afterEach(cleanup);

    test("should show searchfield", async() => {
        const mockSubmit = jest.fn();

        await act(async () => {
            render(
                <WeatherProvider>
                    <SearchField />
                    <WeatherContext.Consumer>{mockSubmit}</WeatherContext.Consumer>
                </WeatherProvider>,
            );
        })

        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();

        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Vancouver' } });
        fireEvent.click(screen.getByRole('button'));

        expect(mockSubmit).toHaveBeenCalledTimes(3);

    });
});
