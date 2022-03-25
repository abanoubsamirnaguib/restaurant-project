// const { ObjectId } = require("mongodb")
const userModel = require("../../db/models/user.model")
class User {

    static add = async (req, res) => {
        try {
            console.log(req.body);
            const user = new userModel(req.body)
            await user.save()
            res.status(200).send({
                apiStatus: true,
                data: user,
                message: "user added"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in register"
            })
        }
    }
    static login = async (req, res) => {
        try {
            const user = await userModel.loginUser(req.body.email, req.body.password)
            const token = await user.generatetoken()
            res.status(200).send({
                apiStatus: true,
                data: { user, token },
                message: "logged in"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in login"
            })
        }
    }
    static profile = async (req, res) => {
        try {

            res.status(200).send({
                apiStatus: true,
                data: req.user,
                message: "profile fetched"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in profile fetched"
            })
        }
    }
    static editWithToken = async (req, res) => {
        try {
            if(req.body.password){
                req.user.password = req.body.password
                await req.user.save();    
                req.body.password = req.user.password
                // console.log(req.body.password);                                                        
            }
            const user = await userModel.findByIdAndUpdate(
                req.user._id, req.body, { runValidators: true }
            )
            res.status(200).send({
                apiStatus: true,
                data: user,
                message: "user deleted"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in deleting"
            })
        }
    }
    static changePass = async (req, res) => {
        try {

            req.user.password = req.body.password
            await req.user.save();

            res.status(200).send({
                apiStatus: true,
                data: req.user,
                message: "password changed"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in password changes"
            })
        }
    }
    static logOut = async (req, res) => {
        try {
            req.user.tokens = req.user.tokens.filter(t => t.token != req.token)
            await req.user.save();
            res.status(200).send({
                apiStatus: true,
                data: "",
                message: "logged out"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in logout"
            })
        }
    }
    static logOutAll = async (req, res) => {
        try {
            req.user.tokens = []
            await req.user.save();
            res.status(200).send({
                apiStatus: true,
                data: "",
                message: "logged out from all devices"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in logout all"
            })
        }
    }
    static del = async (req, res) => {
        try {
            const user = await userModel.findByIdAndDelete(req.user._id)
            res.status(200).send({
                apiStatus: true,
                data: user,
                message: "user deleted"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in deleting"
            })
        }

    }


}


module.exports = User