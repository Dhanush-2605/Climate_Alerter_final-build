const router=require("express").Router();

router.post("/",async (req,res)=>{
  const accountSid = "ACa4af5937ddf2cdb2d990539dafaf7904";
  const authToken = "e3108ed1cc94bdb1a351af4e808ecb06";
  const client = require('twilio')(accountSid, authToken);
  let data="AIR QUALITY INDEX OF THE FOLLOWING ADDRESS IS VERY HIGH TRY TO REACH THERE AS SOON AS POSSIBLE AND ADDRESS IS MG ROAD,DOLLAR STREET,HYDERABAD";

client.calls
      .create({
         twiml: `<Response ><Say voice="men">${data}</Say></Response>`,
         to: '+917702436070',
         from: '+19705924312'
       })
      .then(call => console.log(call.sid));

})

module.exports=router;

