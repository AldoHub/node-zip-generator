const express = require("express");
const router = express.Router();
const zipController = require("../controllers/zipController");

router.get("/", zipController.index);
router.get("/zip", zipController.downloadZip)

module.exports = router;
