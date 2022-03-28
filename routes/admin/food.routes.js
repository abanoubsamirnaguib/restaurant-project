const router = require("express").Router();
const adminController = require("../../controller/admin/admin.controller");
const foodController = require("../../controller/admin/food.controlller.js");
const userController = require("../../controller/web/user.controller");

router.post("/add",auth, foodController.add)
router.get('/delete/:id', auth, foodController.delete)
router.get('/edit/:id', auth, foodController.edit)
router.get('/show/:id', auth, foodController.show)
router.get('/showall', auth, foodController.showall)

module.exports = router;
