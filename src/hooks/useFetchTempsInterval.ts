import { useState, useEffect } from "react";
import WeatherService from "../services/Weather.service";

function useFetchTempsInterval(location: string, intervalTime = 10000) {
  const [temperatureData, setTemperatureData] = useState<Array<any>>([]);

  const getTemperaturesData = async () => {
    const data = await WeatherService.getTemperatures(location);
    setTemperatureData(data);
  };

  useEffect(() => {
    getTemperaturesData();

    const intervalData = setInterval(() => {
      getTemperaturesData();
    }, intervalTime);

    return () => clearInterval(intervalData);
  }, []);

  return { temperatureData };
}

export default useFetchTempsInterval;
