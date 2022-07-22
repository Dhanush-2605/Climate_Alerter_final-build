import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import News from "./pages/news/News";
// import Home from "./components/navbar/home/Home";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Facts from "./components/facts/Facts";
import Register from "./pages/register/register";
import ApiCalls from "./components/apicalls/APICalls";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { createContext, useState } from "react";

import AQI from "./pages/aqi/AQI";
import CarbonCalculator from "./pages/carbonCalculator/carbonCalculator";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={token?<Home />:<Login />} />  */}
        <Route path="/" element={<Home />} />
        <Route path="/carboncalculator" element={<CarbonCalculator />} />
        <Route path="/news" element={<News />} />
        {/* <Route path="/facts" element={<Facts />} /> */}
        {/* {token?<Route path="/aqi" element={<AQI />} /> :<Route path="/login" element={<Login />} />} */}
        <Route path="/aqi" element={<AQI />} />
        <Route path="/login" element={<Login />} />
        <Route path="/api" element={<ApiCalls />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
