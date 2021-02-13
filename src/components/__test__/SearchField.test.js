import { render, screen, fireEvent } from '@testing-library/react';
import SearchField from '../SearchField';
import { WeatherProvider, WeatherContext } from '../context/WeatherContext';

describe('SearchField', () => {
    it("should show searchfield", async() => {
        const handleSubmit = jest.fn();

        render(
            <WeatherProvider>
                <WeatherContext.Consumer>
                    {(value) => (
                        <SearchField onSubmit={value.handleSubmit}/>
                    )}
                </WeatherContext.Consumer>
            </WeatherProvider>
        )

        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();

        // fireEvent.change(screen.getByRole('textbox'), {
        // target: { value: 'Vancouver' },
        // });
        // await fireEvent.click(screen.getByRole('button'));

        // screen.debug();
        // expect(handleSubmit).toHaveBeenCalled();
    });
});
