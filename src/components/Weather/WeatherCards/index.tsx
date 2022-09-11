import { useContext } from "react";
import { ThemeContext } from "../../../context/WeatherUnitCtx";
import useFetchTempsInterval from "../../../hooks/useFetchTempsInterval";
import { IWeatherProp } from "../../../types/WeatherTypes";


function WeatherCard({location}:IWeatherProp) {

  const [tempUnit, _] = useContext<any>(ThemeContext);
  const {temperatureData} = useFetchTempsInterval(location);

  if (!temperatureData) return <p>Loading...</p>;
  return (
    <>
      {temperatureData
        .filter((forecast: any) => forecast.is_day == 1)
        .slice(0,12)
        .map((weatherData: any) => (
          <div className="card  text-center">
            <div> {weatherData.time.split(" ")[1]}</div>
            <div className="card-body">
              <img src={weatherData.condition.icon} />
              <div>
                {tempUnit.unit == "C" ? weatherData.temp_c : weatherData.temp_f}{" "}
                °{tempUnit.unit}
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default WeatherCard;
