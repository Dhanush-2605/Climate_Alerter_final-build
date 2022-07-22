import React, { useEffect, useState } from "react";
import classes from "./news.module.css";
import axios from "axios";
const News = () => {
  const title = "times india";
  const [newsData, setNewsData] = useState([]);
  // setNewsData([{title:"lol",source:'heading',url:"https://mail.google.com/mail/u/0/#inbox"},{title:"lol",source:'heading',url:"https://mail.google.com/mail/u/0/#inbox"},{title:"lol",source:'heading',url:"https://mail.google.com/mail/u/0/#inbox"}])
  useEffect(() => {
    const getData = () => {
      try {
        const options = {
          method: "GET",
          url: "https://live-climate-news1.p.rapidapi.com/news/thetimes",
          headers: {
            "X-RapidAPI-Key":
              "12b76e9c3dmsh60f76c067960f4dp127b20jsneab93f457a09",
            "X-RapidAPI-Host": "live-climate-news1.p.rapidapi.com",
          },
        };

        axios
          .request(options)
          .then(function (response) {
            console.log(response.data);
            setNewsData(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);
  return (
    <div className={classes.container}>
      {newsData.map((data) => (
        <div className={classes.wrapper}>
          <div className={classes.heading}>
            <h1>{data.source.toUpperCase()}</h1>
          </div>
          <div className={classes.desc}>
            <p>{data.title}</p>
          </div>
          <div className={classes.link}>
            <button>
              <a href={data.url} alt="newsurl">
                Website Link
              </a>
            </button>
          </div>
        </div>
      ))}


    </div>
  );
};

export default News;
