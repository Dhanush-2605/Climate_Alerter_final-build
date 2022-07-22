const router = require("express").Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
router.post("/register", async (req, res) => {
  try {
    const exist = await User.findOne({ email: req.body.email });
    // console.log(exist);
    if (exist) {
      return res.status(400).send("User already exists try to login");
    }
    let newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      number: req.body.number,
    });

    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    console.log(err);
    // return res.status(500).json("register error");
  }
  console.log(req.body);
});

router.post("/login", async (req, res) => {
  try {
    const {email,password}=req.body;
    let exist = await User.findOne({email});
    if (!exist) {
      return res.status(401).json("you need to register");
    }
    if (exist.password!=password) {
      return res.status(400).json("Enter correct password");
    }
    const payload = {
      user: {
        id: exist._id,
      },
    };
    jwt.sign(payload, "jwtSecret", { expiresIn: "1d" }, (err, token) => {
      if (err) throw err;
      return res.json({ token });
    });

    // res.status(200).json(userExist);

    // console.log(userExist);
  } catch (err) {
    console.log(err);
    // return res.status(500).json("internal server error");
  }
});

module.exports = router;
