import { useContext } from "react";
import { ThemeContext } from "../../../context/WeatherUnitCtx";

function ToggleSwitch() {
  const [unit, toggleUnit] = useContext<any>(ThemeContext);

  return (
    <>
      <div className="row">
        <div className="mr-1 ml-1" style={{
          fontWeight: unit.unit=='C'?'bold':''
        }}>°C</div>
        <div>
          <label className="toggle">
            <input
              type="checkbox"
              className="toggle_input"
              onChange={toggleUnit}
            />
            <div className="toggle-control"></div>
          </label>
        </div>
        <div className="mr-1 ml-1" style={{
          fontWeight: unit.unit=='F'?'bold':''
        }}> °F</div>
      </div>
    </>
  );
}

export default ToggleSwitch;
