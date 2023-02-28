import isAuthenticated from 'passport';


const authenticate = (req, res, next) => {
    // console.log(isAuthenticated);
    if (req.isAuthenticated()) {
        next();
    } else {
        return res.send("<h2>user not authenticated</h2>")
    }
};

export { authenticate };


// app/routes/index.js/router.get
// // Home page
// router.get('/', function(req, res, next) {
//     // If user is already logged in, then redirect to rooms page
//     if(req.isAuthenticated()){
//       res.redirect('/rooms');
//     }
//     else{
//       res.render('login', {
//         success: req.flash('success')[0],
//         errors: req.flash('error'),
//         showRegisterForm: req.flash('showRegisterForm')[0]
//       });
//     }
//   });