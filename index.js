const express = require('express');
const { connection } = require('./config/connection');
const { router } = require('./routes/user.routes');
const session = require('express-session');
const passport = require('passport');
const { loaclAuth } = require('./helper/local');

const app = express();
app.use(express.json());
app.use(session({secret :"secret"}));
loaclAuth(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.set("views", __dirname+"/views");
app.use(express.static(__dirname + "/public"));
app.use(router);


app.listen(8090, ()=>{
    console.log("Server is listening on http://localhost:8090");
    connection();
})