const router = require("express").Router();
const adminController = require("../../controller/admin/admin.controller");
const infoController = require("../../controller/admin/info.controller");
const userController = require("../../controller/web/user.controller");
const auth = require("../../middleware/auth")
const upload = require("../../middleware/fileupload")

router.get("/alluser", auth ,adminController.all)
router.get("/allOrder", adminController.allOrder)
router.get("/user/:id", adminController.single)
router.patch('/editUser/:id', adminController.edit)
router.delete('/deleteUser/:id', adminController.del)
router.patch('/changePic/:id',auth, upload.single("filePic") ,adminController.addPic)
//info
router.get("/Info", infoController.all)
router.post("/addInfo", infoController.add)
router.patch('/editInfo', infoController.edit)
router.delete('/deleteInfo', infoController.del)

module.exports = router;
