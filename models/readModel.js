const mongoose = require("mongoose");

const readSchema = mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  newsArticle: {
    type: String,
    ref: "Article",
    required: true,
  },
});

module.exports = mongoose.model("Read", readSchema);
