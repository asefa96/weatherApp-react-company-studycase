import { ReactNode, SetStateAction } from "react";
import { ToggleSwitch } from "../../common";

interface IWeatherContainer {
  children: ReactNode;
  locationInfos?: any;
  dailyInfos?: any;
  date?: string;
  onChangeUnit: SetStateAction<any>;
}

function WeatherContainer({
  children,
  locationInfos,
  date,
}: IWeatherContainer) {
  return (
    <>
      <div className="container p-2">
        <div className="card--border w-full bg-white">
          <div className="row mb-2">
            <div className="col-6-xs">
              <div className="font-lg"> {locationInfos.name} </div>
              <div className="font-md"> {locationInfos.country} </div>
              <div className="mt-2"> {date} </div>
            </div>
            <div className="col-6-xs d-flex justify-f-end">
              <ToggleSwitch />
            </div>
          </div>
          <div className="row gap-1 justify-center ">{children}</div>
        </div>
      </div>
    </>
  );
}

export default WeatherContainer;
