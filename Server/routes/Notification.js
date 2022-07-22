const router = require("express").Router();

console.log(process.env.TWILIO_ACCOUNT_SID);

router.post("/", async (req, res) => {
  const msg = req.body.message;
  

  const accountSid ="ACa4af5937ddf2cdb2d990539dafaf7904";
  const authToken ="e3108ed1cc94bdb1a351af4e808ecb06";
  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      body:msg,
      to: "+917702436070",
      from: "+19705924312",
    })
    .then((message) => console.log(message.sid)).catch((err)=>{
        console.log(err);
    })
    
 
});


module.exports=router;