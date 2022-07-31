const User = require("../models/User");

//id: admin
//pass: GpApk9cSzykONOcI

exports.register = async (req,res,next)=>{
    const {username,email,password} = req.body;
    try{
        const user = await User.create({
            username,email, password
        });
        res.status(201).json({
            success:true,
            user 
        });
    } catch(error){
        res.status(500).json({
            success:false,
            error: error.message,
        });
    }
};

exports.login = async (req,res,next)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({success: false, error:"Please provide email and password"});
    }

    try{
        const user = await User.findOne({email}).select("+password");
        if(!user){
            return res.status(404).json({ success: false, error: "No account found"});
        }

        const isMatch = await user.matchPassword(password);

        if(!isMatch){
            return res.status(404).json({success: false, error:"Wrong Password"});
        }

        res.status(200).json({
            success:true,
            token:"treasdf4565sadf"
        })
    }catch(error){
        res.status(500).json({success:false, error: error.message});
    }
};

exports.forgotPassword = (req,res,next)=>{
    res.send("Forgot Password Route");
};

exports.resetpassword = (req,res,next)=>{
    res.send("Reset Password Route");
};