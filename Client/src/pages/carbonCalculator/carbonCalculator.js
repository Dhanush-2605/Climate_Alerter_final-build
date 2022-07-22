import React from "react";
import { useState } from "react";
import classes from "./calculator.module.css";
const CarbonCalculator = () => {
  const [carbonData, setCarbonData] = useState({});
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const setData = (event) => {
    setCarbonData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });

    // console.log(event.target.value);
  };

  const Calculate = (data) => {
    setShowResult(true);
    console.log(carbonData);
    let weight;
    let fuel = parseInt(carbonData.fuel);
    let distance = parseInt(carbonData.distance);

    switch (carbonData.fueltype) {
      case "petrol":
        weight = 2392;
        setResult((weight * fuel) / distance);

        break;
      case "diesel":
        weight = 2640;
        setResult((weight * fuel) / distance);
        break;
      case "lpg":
        weight = 1655;
        setResult((weight * fuel) / distance);
        break;
      default:
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.data}>
          <select name="fueltype" onChange={setData}>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="lpg">LPG</option>
          </select>
          <div className={classes.input}>
            <label>Fuel Consumed</label>
            <br />

            <input
              type="number"
              name="fuel"
              onChange={setData}
              placeholder="Liters"
            ></input>
          </div>
          <div className={classes.input}>
            <label>Distance Travelled</label>
            <br />
            <input
              type="number"
              name="distance"
              placeholder=" KM"
              onChange={setData}
            ></input>
          </div>
          <div className={classes.btn}>
            <button onClick={Calculate}><span style={{fontSize:"20px"}}>Calculate</span></button>
          </div>
        </div>
        {showResult && (
          <>
            <div className={classes.result}>
              <h2 className={classes.title}>Total Emission</h2>
              <p>
                <span>{result / 1000}</span>KgCO2
              </p>
            </div>

   
            <div className={classes.suggestions}>
              <div className={classes.heading}>
                <h1>Suggestion's To Reduce Carbon Emission</h1>
              </div>
              <div className={classes.content}>
                <ul className={classes.inner}>
                  <li>
                    <h3>
                      Eat more food that is grown or made locally and less red
                      meat
                    </h3>
                  </li>
                  <li>
                    <h3>
                      {" "}
                      Use alternative transportation (bus, train, carpool, or
                      bike) to get to work one day per week
                    </h3>
                  </li>
                  <li>
                    <h3>
                      Switch lights off when you leave the room and unplug your
                      electronic devices when they are not in use
                    </h3>
                  </li>
                  <li>
                    <h3>
                      Installing a low-flow showerhead to reduce hot water use
                      can save 350 pounds of CO2. Taking shorter showers helps,
                      too
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CarbonCalculator;
