import React, { useEffect, useState } from "react";

import axios from "axios";

import classes from "./aqi.module.css";
import Chart from "../../components/chart/Chart";

const AQI = () => {
  const [color, setColor] = useState("");
  const [data, setData] = useState({});
  const [makeCall,setMakeCall]=useState(false);

  const [aqi, setAqi] = useState();
  let num = 1;

  console.log(aqi);

  const handleClick=()=>{
    setMakeCall((prev)=>{
      return (!prev)
    })

  }

  useEffect(() => {
    const makeCall = async () => {
      try {
        if (num > 3 || makeCall) {
          const res = await axios.post("http://localhost:5000/api/call");
          console.log(res);
        }
      } catch (err) {
        console.log(err);
      }
    };
    makeCall();
  }, [aqi, num]);

  useEffect(() => {
    const getData = async () => {
      const ApiKey = "bc4c6858e71aee709408133ada4ae4f7";

      try {
        const res = await axios.get(
          "http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=" +
            ApiKey
        );
        console.log(res.data.list[0].components);
        setData(res.data.list[0].components);
        setAqi(res.data.list[0].main.aqi);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  const indicator = () => {
    return <h2 style={{ color: { color } }}>MODERATE</h2>;
  };

  useEffect(() => {
    const data = {
      message: `CURRENT AIR QUALITY INDEX AT YOUR LOCATION IS ${num},  IT IS GOOD YOU CAN GO FOR A WALK`,
    };
    if (num > 3) {
      data.message = `CURRENT AIR QUALITY IS HIGH "${num}" TRY TO STAY INSIDE`;
    }

    const postData = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/notification",
          data
        );
      } catch (err) {
        console.log(err);
      }
    };
    postData();
  });

  console.log(`"${color}"`);

  return (
    <>
      <div>
      <div className={classes.button}>
        <button onClick={handleClick}>makeCall</button>
      </div>
        <div className={classes.wrapper}>
          <div className={classes.top}>
            <Chart />
          </div>
          <div className={classes.bottom}>
            <div className={classes.left}>
              <div>
                <h1>AQI</h1>
              </div>
              <div className={classes.index}>
                <h1>{aqi}</h1>
              </div>
              <div className={classes.result}>
                <h2 style={{ color: { color } }}>MODERATE</h2>
                {/* {indicator()} */}
              </div>
            </div>
            <div className={classes.right}>
              <div className={classes.title}>
                <h1>Concentrations</h1>
              </div>
              <ul className={classes.concentrations}>
                <li>
                  <span>co :</span>
                  {data.co}
                </li>
                <li>
                  <span>nh3 :</span>
                  {data.no}
                </li>
                <li>
                  <span>pm2_5 :</span>
                  {data.pm2_5}
                </li>
                <li>
                  <span>pm10 :</span>
                  {data.pm10}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default AQI;

// Good
// rgb(19,201,28)

// Fair
// 15,134,25

// Moderate
// 201,204,13

// poor
// 204,83,13
// very poor
// 204,13,13
