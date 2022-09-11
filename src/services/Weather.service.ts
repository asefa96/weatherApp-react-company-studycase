import { IWeatherData } from "../types/WeatherServiceTypes";
import { generateWeatherUrl } from "../utils/commonUtils";
import { apiConfig } from "./../configs/api.config";
import ApiService from "./Api.service";

class WeatherService extends ApiService {
  async getTemperatures(location: string) {
    const data: IWeatherData = await this.getWeatherData(location);
    return data.forecast.forecastday[0].hour;
  }

  async getLocationInfos(location: string) {
    const data: IWeatherData = await this.getWeatherData(location);

    return {
      locationInfo: data.location,
      date: data.forecast.forecastday[0].date,
    };
  }

  private async getWeatherData(location: string): Promise<IWeatherData> {
    const weatherApiConfig = {
      url: apiConfig.url,
      key: apiConfig.key,
      params: {
        q: location,
        days: 1,
      },
    };

    return await this.get(generateWeatherUrl(weatherApiConfig));
  }
}

export default new WeatherService();
