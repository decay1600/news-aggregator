const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  article_id: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  keywords: [
    {
      type: String,
    },
  ],
  creator: [String],
  video_url: String,
  description: String,
  content: String,
  pubDate: {
    type: Date,
    required: true,
  },
  image_url: String,
  source_id: {
    type: String,
    required: true,
  },
  source_priority: Number,
  country: [
    {
      type: String,
    },
  ],
  category: [
    {
      type: String,
    },
  ],
  language: String,
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
