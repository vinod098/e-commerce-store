var express = require('express');
const { check, validationResult } = require('express-validator');
var router = express();
const {signout , signup , signin , isSignedIn} = require("../controllers/auth");

router.post("/signup", [
    check('name' , "name should be atleast three char").isLength({ min: 3 }),
    check('email',"email is required").isEmail(),
    check('password' , "password should be atleast three char").isLength({ min: 3 })
] , signup);

router.post("/signin", [
    check('email',"email is required").isEmail(),
    check('password' , "password is required").isLength({ min: 1 })
] , signin);


router.get("/signout" , signout );

router.get("/testroute" , isSignedIn , (req , res)=>{
    res.send("a protected route")
});
module.exports = router;