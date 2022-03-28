const User = require("../db/models/user.model")

const admin = async(req, res, next) =>{
    try{
        const admin = await User.findOne({
            email: "superAdmin@gmail.com",
        })
        if(!admin) throw new Error("allowed for Admins only")
        next()
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            errors:e.message,
            message:"error in fetching admin information"
        })
    }
}
module.exports = admin