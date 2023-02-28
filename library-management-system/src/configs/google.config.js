import GoogleStrategy from 'passport-google-oauth20';
import config from './index'
import User from '../api/models/user.model'

const googleAuth = (passport) => {
    GoogleStrategy.Strategy;

    passport.use(
        new GoogleStrategy(
            {
                clientID: config.GOOGLE_CLIENT_ID,
                clientSecret: config.GOOGLE_CLIENT_SECRET,
                callbackURL: config.GOOGLE_REDERECT_URL
            },
            async (accessToken, refreshToken, profile, callback) => {
                const userOBJ = {
                    googleID: profile.id,
                    displayName: profile.displayName,
                    gmail: profile.emails[0].value,
                    image: profile.photos[0].value,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName
                }

                //select * from user where googleId=profile.id
                let user = await User.findOne({ googleId: profile.id });

                if (user) {
                    return callback(null, user);
                }

                User.create(userOBJ)
                    .then((user) => {
                        return callback(null, user);
                    })
                    .catch((err) => {
                        return callback(err.message);
                    });

            }));

    passport.serializeUser((user, callback) => {
        callback(null, user.id);
    });

    passport.deserializeUser((id, callback) => {
        User.findById(id, (err, user) => {
            callback(err, user)
        });
    });
};

export { googleAuth };