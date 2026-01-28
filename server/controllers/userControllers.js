import { User } from "../model/userModel.js";


export const userSignUp = (req, res, next) => {
    try {
        console.log(req.body);
        const { name, email, password, phone, profilepic } = req.body;

        if (!name || !email || !password || !phone) {
            return res.status(400).json({ success: false, message: "All fields required" })
        }//checking all fields are present or not

        const isPhoneExist = User.findOne({ phone: phone });
        if (isPhoneExist) {
            return res.status(400).json({ success: false, message: "You entered phone is already exist " })
        }//checking phone already exist or not

        const isEmailExist = User.findOne({ email: email });
        if (isEmailExist) {
            return res.status(400).json({ success: false, message: "You entered email is already exist " })
        }//checking email already exist or not

        const newUser = new User({
            name, email, password, phone, profilepic

        })
        newUser.save();
        return res.status(201).json({success:true,message:"user registered successfully",datda:newUser})
    } catch (error) {
        console.log(error);//this will log the error in the console
        res.status(error.status || 500)
            .json({ message: error.message || "internal server error" });//this will send the error message to the client
    }
}//user sign up controller
