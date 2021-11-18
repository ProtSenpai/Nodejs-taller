const express = require('express')
const router = express.Router()
const user_controller = require('../controller/users')

router.get("/:id", user_controller.show)
router.get("/", user_controller.index)
router.post("/", user_controller.create)
router.put("/:id", user_controller.update)
router.delete("/:id", user_controller.delete)

module.exports = router