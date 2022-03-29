const router = require("express").Router();
const adminController = require("../../controller/admin/admin.controller");
const foodController = require("../../controller/admin/food.controlller.js");
const userController = require("../../controller/web/user.controller");
const auth = require("../../middleware/auth")

router.get('/showall', foodController.showall)
router.get('/show/:id', foodController.show)
router.post("/add", foodController.add)//admin
router.patch('/edit/:id', foodController.edit)//admin
router.delete('/delete/:id', foodController.delet)//admin
router.post('/AddComment/:id', auth, foodController.AddComment)
router.post('/like/:id', auth, foodController.like)
router.post('/dislike/:id', auth, foodController.dislike)

module.exports = router;
