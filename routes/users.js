const express = require('express')
const router = express.Router()
const user_controller = require('../controller/users')
const auth = require('../middleware/auth')

router.get("/:id", user_controller.show)
router.get("/", user_controller.index)
router.post("/", user_controller.create)
router.put("/:id", auth, user_controller.update)
router.delete("/:id", auth, user_controller.delete)

module.exports = router