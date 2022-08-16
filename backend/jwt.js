// JWT
const passport = require('passport');
const keys = require('./users/key');
const User = require('./users/users');

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys;

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        const users = User.find(x => x.id === jwt_payload.id)
        try {
            if (users) {
                return done(null, users);
            } else {
                return done(null, false);
            }
        } catch (err) {
            console.log(err);
        }
    }))
}