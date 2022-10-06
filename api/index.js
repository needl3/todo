const express = require("express");
const cors = require("cors");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

require("./configs/Db").connect();

app = express();

app.use(cors({ origin: process.env.ORIGINS.split(",") }));

app.use((req, res, next) => {
  console.log("=>  " + req.url);
  next();
});
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../build")));

app.get("/", (req, res) => {
  if (process.env.DEV == true)
    return res.json({ message: "Sorry bro, no landing page in development" });
  else res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

app.use("/api", require("./api.js"));

server = app.listen(process.env.PORT || 80, () => {
  console.log("Listening on ", server.address().address, server.address().port);
});
