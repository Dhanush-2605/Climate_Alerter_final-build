const mongoose=require("mongoose");
// import User from "../../../../E-Commerce Website/Server/models/User";


const UserSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique:true },
  password: { type: String, required: true },
  number: { type: Number, required: true },
});


module.exports=mongoose.model("User",UserSchema);