const router = require("express").Router();
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    })

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
})

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        if(!user){
            res.status(401).json("Wrong credentials");
        } else {
            const decryptPassword = CryptoJs.AES
            .decrypt(user.password, process.env.PASS_SEC)
            .toString(CryptoJs.enc.Utf8);

            if(decryptPassword === req.body.password){
                const { password, ...others } = user._doc;
                const accessToken = jwt.sign(
                {
                    id: user._id,
                    isAdmin: user.isAdmin,
                }, 
                process.env.JWT_SEC,
                { expiresIn:"3d" }
                );

                res.status(200).json({ ...others, accessToken });
            } else {
                res.status(401).json("Wrong credentials");
            }
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;