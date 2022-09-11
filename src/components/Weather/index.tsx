import { useContext, useState } from "react";
import { ThemeContext } from "../../context/WeatherUnitCtx";
import useFetchLocationInfo from "../../hooks/useFetchLocationInfo";
import { Spinner } from "../common";
import WeatherCards from "./WeatherCards";
import WeatherContainer from "./WeatherContainer";

interface IWeatherProp {
  location?: string;
}

function Weather({ location = "London" }: IWeatherProp) {
  const [_, setTempUnit] = useContext<any>(ThemeContext);
  const { locationInfo, date } = useFetchLocationInfo(location);

  if (!locationInfo) return <Spinner />;
  return (
    <>
      <WeatherContainer
        locationInfos={locationInfo}
        date={date}
        onChangeUnit={setTempUnit}
      >
        <WeatherCards location={location} />
      </WeatherContainer>
    </>
  );
}

export default Weather;
