
export const WEATHER_ICONS = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-rain",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-cloud",
    ClearNight: "wi-night-clear",
    CloudyNight: "wi-night-alt-cloudy",
    FoggyNight: "wi-night-fog",
    SonwyNight: "wi-night-snow",
    RainyNight: "wi-night-rain",
    DrizzleNight: "wi-night-showers",
    ThunderstormNight: "wi-night-thunderstorm"
}

export const getIcon = (Id) => {
let icon ;
    if (Id >= 200 && Id < 232) {
    icon = WEATHER_ICONS.Thunderstorm
    } else if (Id >= 300 && Id <= 321) {
    icon = WEATHER_ICONS.Thunderstorm
    } else if (Id >= 500 && Id <= 521) {
    icon = WEATHER_ICONS.Rain
    } else if (Id >= 600 && Id <= 622) {
    icon = WEATHER_ICONS.Snow
    } else if (Id >= 701 && Id <= 781) {
    icon = WEATHER_ICONS.Atmosphere
    } else if (Id === 800) {
    icon = WEATHER_ICONS.Clear
    } else if (Id >= 801 && Id <= 804) {
    icon = WEATHER_ICONS.Clouds
    }

return icon
}
