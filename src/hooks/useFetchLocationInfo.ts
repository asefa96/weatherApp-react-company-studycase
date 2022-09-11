import { useState, useEffect } from "react";
import WeatherService from "../services/Weather.service";

function useFetchLocationInfo(location: string) {
  const [locationInfo, setLocationInfo] = useState<any>({});

  const getLocationInfo = async () => {
    const data = await WeatherService.getLocationInfos(location);
    setLocationInfo({ locationInfo: data.locationInfo, date: data.date });
  };

  useEffect(() => {
    getLocationInfo();
  }, []);

  return { locationInfo: locationInfo.locationInfo, date: locationInfo.date };
}

export default useFetchLocationInfo;
