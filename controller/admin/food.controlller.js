const foodModel = require("../../db/models/food.model")

class FOOD {
    static add = async (request, response) => {
        try {
            const food = new foodModel(request.body)
            await food.save()
            response.status(200).send({
                apiStatus: true,
                data: food,
                message: "meal added"
            })
        }
        catch (e) {
            response.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in add meal"
            })
        }
    }
    
}

module.exports = FOOD