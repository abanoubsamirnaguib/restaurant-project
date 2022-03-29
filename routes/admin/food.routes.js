const router = require("express").Router();
const adminController = require("../../controller/admin/admin.controller");
const foodController = require("../../controller/admin/food.controlller.js");
const userController = require("../../controller/web/user.controller");

router.post("/add", foodController.add)
router.get('/delete/:id',  foodController.delete)
router.get('/edit/:id',  foodController.edit)
router.get('/show/:id',  foodController.show)
router.get('/showall',  foodController.showall)

module.exports = router;
