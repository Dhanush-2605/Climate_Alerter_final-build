import React, { useState,useContext } from "react";
// import classes from "./login.module.css";
import classes from "./register.module.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyIcon from "@mui/icons-material/Key";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { useRef } from "react";
import axios from "axios";

const Register = () => {
  const [newUserData, setNewUserData] = useState({});
  const [number,setNumber]=useState();



const changeHandler=(event)=>{
  setNewUserData((prev)=>{
    return {
      ...prev,
      [event.target.name]:event.target.value
    }
  })
}


  const sendData = async (event) => {
    event.preventDefault();




    await axios
      .post("http://localhost:5000/api/register", newUserData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(userData);

  return (
    <div className={classes.main_container}>
      <form>
        <div className={classes.wrapper}>
          <div className={classes.title}>
            <h2>Register Form</h2>
          </div>

          <div className={classes.input_container}>
            <div className={classes.icon}>
              <PersonOutlineIcon />
            </div>

            <input
              className={classes.input_field}
              type="text"
              placeholder="Username"
              name="username"
              onChange={changeHandler}
            />
          </div>

          <div className={classes.input_container}>
            <div className={classes.icon}>
              <EmailIcon />
            </div>
            <input
              className={classes.input_field}
              type="text"
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
          <div className={classes.input_container}>
            <div className={classes.icon}>
              <PhoneAndroidIcon />
            </div>
            <input
              className={classes.input_field}
              type="tel"
              placeholder="Number"
              name="number"
              onChange={changeHandler}
            />
          </div>
          {/* <div className={classes.btn}> */}
          <button type="submit" onClick={sendData} className={classes.btn}>
            Register
          </button>
          {/* </div> */}
        </div>
      </form>
    </div>
  );
};

export default Register;
