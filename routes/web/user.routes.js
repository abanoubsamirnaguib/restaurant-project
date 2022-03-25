const userController = require("../../controller/web/user.controller")
const router = require("express").Router()
const auth = require("../../middleware/auth")
const upload = require("../../middleware/fileupload")

// userDetails
router.post("/register", userController.add)
router.post("/login", userController.login)
router.get("/me",auth, userController.profile)
router.patch('/edit/',auth ,userController.editWithToken)

router.post("/logout",auth, userController.logOut)
router.post("/logoutAll",auth, userController.logOutAll)
router.post("/changePass",auth, userController.changePass)
router.delete('/delete',auth, userController.del)

// router.post("/me",auth, userController.profile)

// foodDetails

module.exports = router