// import { ClassNames } from '@emotion/react'

import classes from "./facts.module.css"
import React from 'react'
import Footer from "../footer/Footer"
import { Fragment } from "react"
import CarbonCalculator from "../../pages/carbonCalculator/carbonCalculator"
const Fact = () => {
  return (
    <Fragment>
    <div className={classes.container}>
    <div className={classes.wrapper}>

    {/* <div className={classes.right}> */}
    <div>
    <h1>Inhaling air pollution takes away at least 1-2 years of a typical human life</h1><br />
    </div>
    <div>
    <h1>65% of the deaths in Asia and 25% of deaths in India is due to air pollution</h1><br />
    </div>
    <div>
    <h1> By 2050, 6 million people will die per year due to air pollution</h1>
    </div>



    {/* </div> */}
  
    </div>
   

    </div>

 <Footer />

    </Fragment>
  )
}

export default Fact
