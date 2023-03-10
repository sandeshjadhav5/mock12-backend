const express = require("express");

const { connection } = require("./configs/db");

const cors = require("cors");
const { adsRouter } = require("./routes/Ads.routes");

require("dotenv").config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Sandesh Jadhav");
});

app.use("/ads", adsRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to the DB");
  } catch (err) {
    console.log(err);
  }

  console.log(`listening at ${process.env.port}`);
});
