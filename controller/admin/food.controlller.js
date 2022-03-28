const { request, response } = require("express")
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
    

static edit = async (request,response)=> {
    try {    const food = await foodModel.findByIdAndUpdate(
        request.params.id, request.body, {runValidators:true}
    )

    
    response.status(200).send({
        apiStatus:true,
        data:food,
        message:"edit done"
    })
}
catch(e){
    response.status(500).send({
        apiStatus:false,
        errors:e.message,
        message:"error in editing"
    })
}

}

static delet = async(request,response)=>{
    try{
        const food = await foodModel.findByIdAndDelete(request.params.id)
        response.status(200).send({
            apiStatus:true,
            data:food,
            message:"meal deleted"
        })
    }
    catch(e){
        response.status(500).send({
            apiStatus:false,
            errors:e.message,
            message:"error in deleting"
        })
    }

}

static show = async (request,response)=> {
    try {    const food = await foodModel.findById( request.params.id)
    response.status(200).send({
        apiStatus:true,
        data:food,
        message:" meal"
    })
}
catch(e){
    response.status(500).send({
        apiStatus:false,
        errors:e.message,
        message:"error in load this meal"
    })
}

}
static showall = async (request,response)=> {
    try { const food = new foodModel(request.body)
        await foodModel
    response.status(200).send({
        apiStatus:true,
        data: allfood,
        message:" ALL MEALS"
    })
}
catch(e){
    response.status(500).send({
        apiStatus:false,
        errors:e.message,
        message:"error in load meals"
    })
}

}
 static like =  async(request,response)=> {
     
    const food = await foodModel.findById( request.params.id)
              food.like= food.like+1
              food.save() 

}
 static dislike =  async(request,response)=> {
     const food = await foodModel.findById( request.params.id)
         food.like= food.like-1
            food.save()                      

}


}
module.exports = FOOD

