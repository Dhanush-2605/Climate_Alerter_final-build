import React, { useContext, useRef } from "react";
import classes from "./login.module.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyIcon from "@mui/icons-material/Key";
import { useState } from "react";
import axios from "axios";
import { store } from "../../App";
import { Route, useNavigate } from "react-router-dom";
const Login = () => {
  const [userData,setUserData]=useState({});
  // const [userData,setToken]=useContext(store);
  const navigate=useNavigate();

  const changeHandler=(event)=>{
    setUserData((prev)=>{
      return {
        ...prev,
        [event.target.name]:event.target.value,
      }
    })
  
  }

  const sendData=async(event)=>{
    event.preventDefault();
    console.log(userData);
    await axios.post("http://localhost:5000/api/login",userData).then((res)=>{
      // setToken(res.data.token);
      

    }).catch((err)=>{
      console.log(err);
    })

  }
  // if (token){
  //   console.log("GOT TOKEN...........");
  //   navigate("/aqi");
  // }


  
  return (
    <div className={classes.main_container}>
    {/* <form> */}
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <h2>Login</h2>
        </div>

        <div className={classes.input_container}>
          <div className={classes.icon}>
            <PersonOutlineIcon />
          </div>

          <input
            className={classes.input_field}
            type="email"
            placeholder="Email"
            name="email"
            onChange={changeHandler}
          />
        </div>

        <div className={classes.input_container}>
          <div className={classes.icon}>
            <KeyIcon />
          </div>
          <input
            className={classes.input_field}
            type="password"
            placeholder="Password"
            name="password"
            onChange={changeHandler}
          />
        </div>

        {/* <div className={classes.btn}> */}
        <button type="submit" onClick={sendData} className={classes.btn}>
          Login
        </button>
        {/* </div> */}
      </div>
      {/* </form> */}
    </div>
  );
};

export default Login;
