const mongoose = require("mongoose");

const PostsModel = mongoose.model(
  "dashboardVoyage",
  {
    langue: {
      type: String,
      required: true
    },
    bonjour: {
      type: String,
      required: true
    },
    merci: {
      type: String,
      required: true
    }
  },
  "traduction"
);

module.exports = { PostsModel };