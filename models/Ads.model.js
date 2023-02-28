const mongoose = require("mongoose");

const adsSchema = mongoose.Schema({
  name: String,
  description: String,
  category: String,
  image: String,
  location: String,
  postedAt: Date,
  price: Number,
});

const AdModel = mongoose.model("ad", adsSchema);

module.exports = {
  AdModel,
};
