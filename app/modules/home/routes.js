/**
 * We load the ExpressJS module.
 * More than just a mere framework, it is also a complementary library
 * to itself.
 */
var express = require('express');

/**
 * Having that in mind, this is one of its robust feature, the Router.
 * You'll appreciate this when we hit RESTful API programming.
 * 
 * For more info, read this: https://expressjs.com/en/4x/api.html#router
 */
var router = express.Router();

/**
 * Import the authentication middleware to check for the user object
 * in the session.
 */
var authMiddleware = require('../auth/middlewares/auth');

/**
 * Use the middleware to check all routes registered for this router.
 */
router.use(authMiddleware.hasAuth);

/**
 * If you can notice, there's nothing new here except we're declaring the
 * route using the router, and not using app.use().
 * 
 * We're also importing controllers from the controller directory of this module.
 */
var indexController = require('./controllers/index');
router.get('/', indexController);


router.get('/faculty/IT/Profile/functions_attended', (req,res) =>{
    res.render('home/views/ITFA');
});
router.get('/faculty/IT/Profile/add?Faculty', (req,res) =>{
    res.render('home/views/IT?Add');
});
router.get('faculty/CS/Profile/FunctionsAttended', (req,res) =>{
    res.render('home/views/CSFA');
});
router.get('faculty/CS/Profile/AddFaculty', (req,res) =>{
    res.render('faculty/CS/profile/add?faculty');
});
router.get('/maintenance',(req,res) =>{
    res.render('home/views/mainte');
});
/**
 * Here we just export said router on the 'index' property of this module.
 */
exports.index = router;