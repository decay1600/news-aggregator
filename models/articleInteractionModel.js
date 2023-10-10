const mongoose = require("mongoose");

const interactionSchema = mongoose.Schema({
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

if (mongoose.connection.models["Read"]) {
  delete mongoose.connection.models["Read"];
}

if (mongoose.connection.models["Favourite"]) {
  delete mongoose.connection.models["Favourite"];
}

const Read = mongoose.model("Read", interactionSchema);
const Favourite = mongoose.model("Favourite", interactionSchema);

module.exports = { Read, Favourite };
