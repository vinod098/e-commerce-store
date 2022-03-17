const express = require("express");
const router = express.Router();

const{getUserById , getUser , updateUser , UserPurchaseList}= require("../controllers/user");
const{isSignedIn, isAuthenticated , isAdmin} = require("../controllers/auth");


router.param("userId" , getUserById);

router.get("/user/:userId",isSignedIn , isAuthenticated, getUser);
router.put("/user/:userId",isSignedIn , isAuthenticated, updateUser);
router.put("orders/user/:userId",isSignedIn , isAuthenticated,UserPurchaseList);


module.exports = router;