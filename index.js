const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes");
const app = express();
const { PORT, MONGO_URL } = require("./config");
app.use(express.json());
app.use("/api", apiRoutes);

async function main() {
  await mongoose.connect(MONGO_URL);
  app.listen(PORT, function () {
    console.log(`Server Started on PORT ${PORT}`);
  });
}

main();
