const router = require("express").Router();
const foodController = require("../../controller/admin/food.controlller.js");
const auth = require("../../middleware/auth")
const upload = require("../../middleware/fileupload")

router.get('/showall', foodController.showall)
router.get('/show/:id', foodController.show)
router.post("/add", upload.single("foodfilePic") ,foodController.add)//admin
router.patch('/edit/:id', foodController.edit)//admin
router.delete('/delete/:id', foodController.delet)//admin
router.post('/AddComment/:id', auth, foodController.AddComment)
router.post('/like/:id', auth, foodController.like)
router.post('/dislike/:id', auth, foodController.dislike)

router.patch('/changePic/:id', upload.single("foodfilePic") ,foodController.changePic)

module.exports = router;
