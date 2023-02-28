import { authenticate } from '../middleware/auth.middleware'

const routesInit = (app, passport) => {
    app.get('/auth/google',
        passport.authenticate('google', { scope: ['profile', 'email'] })
    );

    app.get('/auth/google/callback',
        passport.authenticate('google', {
            failureRedirect: '/login',
            successRedirect: '/user'
        }),
        function (req, res) {
            // Successful authentication, redirect home.
            console.log('user authenticated');
        });
    app.get('/test', authenticate, (req, res) => {
        res.send('<h2>user is authenticated</h2>');
    });
}
export { routesInit }