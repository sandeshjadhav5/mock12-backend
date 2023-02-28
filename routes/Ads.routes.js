const express = require("express");

const { AdModel } = require("../models/Ads.model");

const adsRouter = express.Router();

adsRouter.get("/", async (req, res, next) => {
  try {
    const { name, category, sort } = req.query;
    if (name) {
      const adsData = await AdModel.find({ name: name });
      res.send(adsData);
    } else if (category) {
      const adsData = await AdModel.find({ category: category });
      res.send(adsData);
    } else {
      const adsData = await AdModel.find();
      res.send(adsData);
    }
  } catch (err) {
    console.log("err", err);
  }
});

adsRouter.post("/create", async (req, res) => {
  const payload = req.body;

  try {
    const newAd = new AdModel(payload);
    await newAd.save();
    res.send({ msg: "Ad Posted" });
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something Went Wrong" });
  }
});

module.exports = {
  adsRouter,
};
