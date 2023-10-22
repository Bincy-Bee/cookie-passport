const { user } = require('../module/user.module');
const localStrategy = require('passport-local').Strategy;

const loaclAuth = (passport)=>{

    passport.use(new localStrategy({usernameField : "email"},async(email, password,done)=>{

        try {
            let User = await user.findOne({email});
            if(!User){
                return done(null,false)
            }
            if(User.password !== password){
                return done(null,false)
            }

            return done(null,User)
        } catch (error) {
            return done(error,false)
        }
    })
    );

    passport.serializeUser((user,done)=>{
        try {
            return done(null, user.id)
        } catch (error) {
            return done(error,false)
        }
    });
    passport.deserializeUser(async(id,done)=>{
        try {
            let User = await user.findById(id);
            return done(null, User)
        } catch (error) {
            return done(error,false)
        }
    });
}


module.exports = {loaclAuth}