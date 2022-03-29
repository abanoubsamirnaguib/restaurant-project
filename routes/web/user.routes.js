const userController = require("../../controller/web/user.controller")
const router = require("express").Router()
const auth = require("../../middleware/auth")
const upload = require("../../middleware/fileupload")

// userDetails
router.post("/register", userController.add)
router.post("/login", userController.login)
router.get("/me/:id",auth,  userController.profile)
router.patch('/edit/',auth ,userController.editWithToken)
router.patch('/changePic/',auth, upload.single("profilePic") ,userController.changePic)

router.post("/logout",auth, userController.logOut)
router.post("/logoutAll",auth, userController.logOutAll)
router.post("/changePass",auth, userController.changePass)
router.delete('/delete',auth, userController.del)

// foodDetails
router.post('/addToCart',auth, userController.AddToCart)
router.delete('/delFromCart/:cartId',auth, userController.delFromCart)
router.post('/AddToOrder',auth, userController.AddToOrder)


module.exports = router