// external import
const express = require("express");
// internal import
const { getUsers } = require("../controller/UsersController");
const decoratedHtmlResponse = require("../meddilewares/common/decoratedHtmlResponse");
const router = express.Router();
// login page
router.get("/",decoratedHtmlResponse("users"), getUsers);
module.exports = router;
