const express = require("express");
const router = express.Router();
const linkController = require("../controllers/link");

router.get("/new", linkController.new);
router.post("/", linkController.create);
router.get("/:id", linkController.show);
router.get("/:id/edit", linkController.edit);
router.put("/:id", linkController.update);
router.delete("/:id", linkController.delete);

module.exports = router;
