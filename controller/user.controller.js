const { user } = require("../module/user.module")

const home = (req,res)=>{
    res.send("Welcome to home of MVC")
}

const signup = async (req,res)=>{

    try {
        let data = await user.findOne({email: req.body.email});

        if (data){
            return res.send("User alreasy exist")
        }
        else{
            data = await user.create(req.body);
            return res.send(data);
        }
    } catch (error) {
        return res.send(error.message)
    }
}

const login = async (req,res)=>{
    try {
        let data = await user.findOne({email : req.body.email})
        if (!data){
            return res.send("user not exit")
        }
        if(data.password !== req.body.password){
            return res.send("Passowrd is incorrect")
        }

        return res.cookie("id", data.id).send("Logged In Successfully")
    } catch (error) {
        return res.send(error.message)
    }
    // res.send("Logged In")
}

const getUser = async(req,res)=>{
    let data = await user.find();
    res.send(data);
}

const getLogin = (req,res)=>{
    res.render("login")
}

const profile = (req,res)=>{
    if (req.user){
        res.send(req.user)
    }
    else{
        res.redirect("login")
    }
}

const logout = (req,res)=>{
    req.logOut((err)=>{
        if(err){
            console.log(err)
        }

        res.send("Logedd Out")
    })
}

const gallery = (req,res)=>{
    res.render("gallery")
}

module.exports={home, signup, login, getUser, getLogin, profile, logout, gallery}