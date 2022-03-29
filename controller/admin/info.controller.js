const infoModel = require("../../db/models/info.model")

class info {

    static all = async (req, res) => {
        try {
            const info = await infoModel.find()
            res.status(200).send({
                apiStatus: true,
                data: info,
                message: "info fetched"
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
    static add = async (request, response) => {
        try {
            const info = new infoModel(request.body)
            await info.save()
            response.status(200).send({
                apiStatus: true,
                data: info,
                message: "information added"
            })
        }
        catch (e) {
            response.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in add information"
            })
        }
    }
    static edit = async (req, res) => {
        try {
            const info = await infoModel.find()
            await infoModel.findByIdAndUpdate(
            info[0]._id, req.body, { runValidators: true }
            )
            res.status(200).send({
                apiStatus: true,
                data: info,
                message: "info edited"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in editing"
            })
        }
    }
    static del = async (req, res) => {
        try {
            const info = await infoModel.find()
             await infoModel.findByIdAndDelete(info[0]._id)
            res.status(200).send({
                apiStatus: true,
                data: info,
                message: "info deleted"
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

module.exports = info