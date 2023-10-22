const { user } = require("../module/user.module");

const findCookie = async(req,res,next)=>{
    const {id} = req.cookies;
    if(id){
        let data = await user.findById(id);
        if(data.username == "admin"){
            next()
        }
        else{
            res.send("only admin can access")
        }
    }
    else{
        res.redirect("login")
    }
}

const isAuth = (req,res,next)=>{
    if(req.user){
        next()
    }
    else{
        res.redirect("login")
    }
}

module.exports = {findCookie,isAuth}