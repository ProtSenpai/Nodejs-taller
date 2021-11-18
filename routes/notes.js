const express = require('express')
const router = express.Router()
const note_controller = require('../controller/notes')

router.get("/:id", note_controller.show)
router.get("/", note_controller.index)
router.post("/", note_controller.create)
router.put("/:id", note_controller.update)
router.delete("/:id", note_controller.delete)

module.exports = router