const userModel = require("../../db/models/user.model")
const fs =require("fs")
class admin {
    static all = async (req, res) => {
        try {
            const users = await userModel.find().sort({ email: 1 })
            res.status(200).send({
                apiStatus: true,
                data: users,
                message: "users fetched"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in fetching"
            })
        }
    }
    static single = async (req, res) => {
        try {
            const user = await userModel.findById(req.params.id)
            res.status(200).send({
                apiStatus: true,
                data: user,
                message: "user fetched"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in fetching"
            })
        }
    }
    static edit = async (req, res) => {
        try {
            if(req.body.password){
                req.user.password = req.body.password
                await req.user.save();    
                req.body.password = req.user.password
            }
            const user = await userModel.findByIdAndUpdate(
            req.params.id, req.body, { runValidators: true }
            )
            res.status(200).send({
                apiStatus: true,
                data: user,
                message: "user edited"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in editting"
            })
        }
    }
    static del = async (req, res) => {
        try {
            const user = await userModel.findByIdAndDelete(req.params.id)
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
    static allOrder = async (req, res) => {
        try {
            const users = await userModel.find().sort({ email: 1 })
            let orders=[];
            users.forEach((user)=>{
                orders.push({
                    userName:user.name,
                    userOrders:user.orders
                })
            })
            res.status(200).send({
                apiStatus: true,
                data: orders,
                message: "orders fetched"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in fetching orders"
            })
        }
    }
    static addPic = async (req, res) => {
        try {
            const user = await userModel.findById(req.params.id)
            // fs.unlinkSync(req.file.path);
            user.image = req.file.path
            // console.log(user.image);
            await user.save()
            res.status(200).send({
                apiStatus: true,
                data: req.file,
                message: "profile image uploaded"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: "erorr in profile image upload"
            })
        }
    }
}

module.exports = admin