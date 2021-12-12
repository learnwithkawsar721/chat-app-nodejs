// external import
const express = require("express");
// internal import
const { getInbox } = require("../controller/inboxController");
const decoratedHtmlResponse = require("../meddilewares/common/decoratedHtmlResponse");
const router = express.Router();
// login page
router.get("/",decoratedHtmlResponse("inbox"), getInbox);
module.exports = router;
