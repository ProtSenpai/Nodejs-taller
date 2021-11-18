const express = require('express')
const router = express.Router()
const product_controller = require('../controller/notes')
const auth = require('../middleware/auth')

router.get("/:id", product_controller.show)
router.get("/", product_controller.index)
router.post("/", product_controller.create)
router.put("/:id", product_controller.update)
router.delete("/:id", product_controller.delete)

module.exports = router