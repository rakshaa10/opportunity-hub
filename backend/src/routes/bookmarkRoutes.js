const express = require("express");

const {
  addBookmark,
  removeBookmark,
  getBookmarks,
} = require("../controllers/bookmarkController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/:opportunityId", authMiddleware, addBookmark);

router.delete("/:opportunityId", authMiddleware, removeBookmark);

router.get("/", authMiddleware, getBookmarks);

module.exports = router;
