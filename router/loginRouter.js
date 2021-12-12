// external import
const express = require("express");
// internal import
const { getLogin } = require("../controller/loginController");
const decoratedHtmlResponse = require("../meddilewares/common/decoratedHtmlResponse");

const router = express.Router();
// login page
router.get("/",decoratedHtmlResponse("login"), getLogin);
module.exports = router;
