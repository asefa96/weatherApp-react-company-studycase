export interface IWeatherProp {
  location: string;
}

export interface IWeatherData {
  current: Object;
  forecast: {
    forecastday: Array<IForecastday>;
  };
  location: Object;
}

export interface IForecastday {
  date: string;
  hour: Array<any>;
}
