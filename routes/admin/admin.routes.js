const router = require("express").Router();
const adminController = require("../../controller/admin/admin.controller");
const userController = require("../../controller/web/user.controller");

router.get("/all", adminController.all)
router.get("/allOrder", adminController.allOrder)
router.get("/user/:id", adminController.single)
router.patch('/edit/:id', adminController.edit)
router.delete('/delete/:id', adminController.del)

module.exports = router;
