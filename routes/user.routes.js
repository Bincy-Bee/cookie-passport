const {Router} = require('express');
const { home, signup, login, getUser, getLogin, profile, logout, gallery } = require('../controller/user.controller');
const { isAuth, findCookie } = require('../middleware/auth');
const passport = require('passport');
const router = Router();

router.get("/", home);

router.post("/signup", signup);

router.post("/login",passport.authenticate("local"), login);

router.get("/login", getLogin);

router.get("/gallery",isAuth,gallery)

router.get("/user",findCookie,getUser);

router.get("/profile",isAuth, profile);

router.get("/logout",logout)

module.exports={router};