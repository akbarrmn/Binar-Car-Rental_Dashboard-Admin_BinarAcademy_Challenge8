const router = require('express').Router();
const passport = require('passport')

const CLIENT_URL = "https://chapter7app.herokuapp.com/";

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

// Google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL ,
    failureRedirect: "/login/failed",
  })
);

// Github
router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL ,
    failureRedirect: "/login/failed",
  })
);

//JWT
const jwt = require('jsonwebtoken');
const keys = require('../users/key');
const users = require('../users/users');

const generateAccessToken = (user)=>{
    return jwt.sign({id:user.id, isAdmin:user.isAdmin, username:user.username}, keys , {expiresIn:"24h"});
}

router.post("/api/login", (req,res)=>{
    const {username, password} = req.body;
    const user = users.find((user)=>{
        return user.username === username && user.password === password
    })
    if (user) {
        // Generate access token
        const accessToken = generateAccessToken(user)
        // response
        res.json({  
            username:user.username,
            isAdmin:user.isAdmin,
            token: "Bearer " + accessToken
        })

    }else{
        res.status(400).json("Username or password incorrect!")
    }
})

// Get API USER CURRENT
// RETURN CURRENT USER
// ACCESS PRIVATE
router.get('/api/protected', passport.authenticate('jwt', {session: false}), (req,res)=>{
  res.json({
    username: req.user.username,
    isAdmin: req.user.isAdmin
  })
})

module.exports = router