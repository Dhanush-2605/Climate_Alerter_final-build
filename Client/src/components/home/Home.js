import React, { useState, useContext } from "react";
import classes from "./home.module.css";
import { useEffect } from "react";
import axios from "axios";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

import Fact from "../facts/Facts";

const Home = () => {
  const [lat, setLat] = useState("");
  const [log, setLog] = useState("");
  const [address, setAddress] = useState("");
  const [curr, setCurr] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const navigate = useNavigate();

  const d = new Date();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  // const d = new Date();
  let month = months[d.getMonth()];
  console.log(month);
  navigator.geolocation.getCurrentPosition((position) => {
    // console.log(position.coords.latitude);
    console.log(position);
    // console.log(position.coords.longitude);

    setLat(position.coords.latitude);

    setLog(position.coords.longitude);
  });
  const handleClick = () => {
    navigate("/carboncalculator");
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const lo = await axios.get(
          "https://api.opencagedata.com/geocode/v1/json?q=" +
            17.6868159 +
            "+" +
            83.2184815 +
            "&key=3b5752d4c64544bdbb8f86b3179082ee"
        );

        setAddress(lo.data.results[0].formatted);
        console.log(address);
        let present = address.split(",")[3];
        setCurr(present.split("-")[0]);
        // console.log(curr);
      } catch (err) {}
    };
    getData();
  }, [address, curr, lat, log]);

  useEffect(() => {
    const getWeather = async () => {
      const city = curr;

      const query = city;
      const apiKey = "ac31d3536effca6fc8a3e073c24776f8";
      const unit = "metric";
      const url =
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        17.6868159 +
        "&lon=" +
        83.2184815 +
        "&units=" +
        unit +
        "&appid=" +
        apiKey;

      const res = await axios.get(url);
      console.log(res.data);
      setWeatherData(res.data);
    };
    getWeather();
  }, [curr, lat, log]);

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.icon}>
            <img src="https://cdn-icons-png.flaticon.com/512/2932/2932445.png" />
          </div>
          <div className={classes.data}>
            <div className={classes.left}>
              <div className={classes.temp}>
                <h1
                  style={{
                    color: "#c5cdcf",
                    // fontSize: "2.9375em",
                  }}
                >
                  {/* {weatherData?weatherData.main.temp:"loading"} */}
                </h1>
              </div>
              <div className={classes.text}>
                <h3 style={{ color: "#c5cdcf" }}>{weatherData.name}</h3>
                <h2 style={{ color: "#8f9b9d", fontSize: "1.1875em" }}>
                  {/* {weatherData.weather[0].main} */}
                </h2>
                {/* <h3 style={{ color: "#c5cdcf" }}>{weatherData.name}</h3> */}
              </div>
            </div>
            <div className={classes.right}>
              <div>{month}</div>
              <div>{d.getDate()}</div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.start}>
        <div className={classes.title}>
          <h2>Check Your Carbon FootPrint </h2>
        </div>
        <button onClick={handleClick}>Click Here</button>
      </div>

      <Fact />
      {/* <CarbonCalculator /> */}
    </Fragment>
  );
};

export default Home;

// "https://api.openweathermap.org/data/2.5/weather?
// lat="{lat}&lon={log} +
// "&units=" +
// unit +
// "&appid=" +
// apiKey;
