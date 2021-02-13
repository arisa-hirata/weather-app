import { render } from '@testing-library/react';
import Weather from '../Weather';
import { WeatherContext } from '../context/WeatherContext';

global.fetch = jest.fn(() =>
  Promise.resolve({
      json: () => Promise.resolve({
          forecast: {
              city: {
                  name: 'vancouver'
              }
          }
      }),
  })
);

 const customRender = (ui, { providerProps, ...renderOptions }) => {
            return render(
                <WeatherContext.Provider {...providerProps}>{ui}</WeatherContext.Provider>,
                renderOptions
            )
        }

beforeEach(() => {
  fetch.mockClear();
});

describe('Weather', () => {
    it("should show weather data", async() => {
        const providerProps = {
            value: {
                forecast: {
                    city: {
                        name: 'Vancouver'
                    },
                    list: [{
                        weather: [{
                            main: 'Clear'
                        }],
                        main: {
                            temp: 3
                        }
                    }]
                }
            }
        }

        const { getByText } = customRender(
            <WeatherContext.Consumer>
                {(value) => <Weather forecast={value} />}
            </WeatherContext.Consumer>,
            { providerProps }
        )

        expect(getByText('Clear').textContent).toBeTruthy();
    });
});
