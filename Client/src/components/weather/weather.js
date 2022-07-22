import React, { useEffect } from "react";
import axios from "axios";
// import { get } from '../../../../../../E-Commerce Website/Server/routes/user';
const ApiCalls = () => {
  useEffect(() => {
    const getData = () => {
      try {
        const city = "chennai";

        const query = city;
        const apiKey = "ac31d3536effca6fc8a3e073c24776f8";
        const unit = "metric";
        const url =
          "https://api.openweathermap.org/data/2.5/weather?q=" +
          query +
          "&units=" +
          unit +
          "&appid=" +
          apiKey;
        const res = axios.get(url);
        console.log(res);
      } catch (err) {}
    };
    getData();
  }, []);
  return <div></div>;
};

export default ApiCalls;
