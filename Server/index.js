
const axios = require("axios");

const express=require("express");
const dotenv=require("dotenv");
const weatherRoute=require("./routes/weather");
const notificationRoute=require("./routes/Notification");
const callRoute=require("./routes/Call");
const authRoute=require("./routes/auth");
const app=express();

const cors=require("cors");
dotenv.config();
const mongoose =require("mongoose");
const twilio = require("twilio");
mongoose.connect(process.env.MONGO_URL).then(()=>{
  console.log("DB Connection Successfull");
}).catch((err)=>{
  console.log(err);
}
)
app.use(cors({origin:"*"}));
app.use(express.json());

app.use("/api",authRoute);
app.use("/api/notification",notificationRoute);
app.use("/api/call",callRoute);

// app.use("/api/weather/",weatherRoute);

// app.

//   const options = {
//     method: 'GET',
//     url: 'https://environment-news-live.p.rapidapi.com/news/timesofindia',
//     headers: {
//       'X-RapidAPI-Key': '12b76e9c3dmsh60f76c067960f4dp127b20jsneab93f457a09',
//       'X-RapidAPI-Host': 'environment-news-live.p.rapidapi.com'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//     console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });


// const router=require("express").Router();


// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// twilio.messages
//       .create({
//          url: 'http://demo.twilio.com/docs/voice.xml',
//          to: '+917702436070',
//          from: '+19705924312',
//          body:"hi this is from dhanush"
//        })
//       .then(call => console.log(call.sid));




      // const http = require('http');
      // const VoiceResponse = require('twilio').twiml.VoiceResponse;
      
      // http
      //   .createServer((req, res) => {
      //     // Create TwiML response
      //     const twiml = new VoiceResponse();
      
      //     twiml.say('Hello from your pals at Twilio! Have fun.');
      
      //     res.writeHead(200, { 'Content-Type': 'text/xml' });
      //     res.end(twiml.toString());
      //   })
      //   .listen(1337, '127.0.0.1');
      
      // console.log('TwiML server running at http://127.0.0.1:1337/');
      
// const options = {
//   method: 'GET',
//   url: 'https://air-quality.p.rapidapi.com/forecast/airquality',
//   params: {lat: '35.779', lon: '-78.638', hours: '72'},
//   headers: {
//     'X-RapidAPI-Key': '12b76e9c3dmsh60f76c067960f4dp127b20jsneab93f457a09',
//     'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	// console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });











  app.listen(5000,()=>{
console.log("started");
  });
