import React from "react";
import classes from "./footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className={classes.container}>
    <div className={classes.header}>
      Connect With Us
    </div>
      <div className={classes.wrapper}>
      <div className={classes.icon}>
        <InstagramIcon
          style={{ fontSize: "40px", margin: 10, color: "#e95950"}}
        />
        </div>
        <div className={classes.icon}>
        <GitHubIcon
          style={{ fontSize: "40px", margin: 10, color: "#171515 " }}
        />
        </div>
        <div className={classes.icon}>
        <FacebookIcon
          style={{ fontSize: "40px", margin: 10, color: "#4267B2" }}
        />
        </div>
        <div className={classes.icon}>
        <TwitterIcon
          style={{ fontSize: "40px", margin: 10, color: "#1DA1F2" }}
        />
        </div>
      </div>
    </div>
  );
};

export default Footer;
