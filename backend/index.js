const cookieSession = require("cookie-session")
const express = require('express');
const app = express()
const passport = require("passport");
const passportSetup = require("./passport")
const cors = require('cors')
app.use(express.json())

const authRoute = require("./routes/auth")

const keys = require('./users/key');
app.use(cookieSession(
    {
        name:"session",
        keys:[keys],
        maxAge: 24 * 60 * 60 * 100 // 1 day
    }
))

app.use(passport.initialize())
app.use(passport.session())

// JWT Passport config
require('./jwt')(passport)

app.use(
    cors({
    origin:"http://chapter7app.herokuapp.com/", //Client Server
    methods: "GET, POST, PUT, DELETE", 
    credentials:true
}))

app.use("/auth", authRoute)

app.listen("5000", ()=>{
    console.log('Server is running!');
})