const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;

const GOOGLE_CLIENT_ID = "1019556970717-0v6bnm5phcdvbp1t9ik7pbniue5641d8.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

const GITHUB_CLIENT_ID = "132940d21e59008be16d"
const GITHUB_CLIENT_SECRET = "17502e35f3f0b9bd843bf08deca1c555c750ae0a"

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
},
  function (accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.use(new GithubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "/auth/github/callback"
},
  function (accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

