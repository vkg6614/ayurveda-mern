const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const productRoute = require("./routes/productRoutes.js");

const app = express();
dotenv.config("/hgfh");

const port = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.get("/", (req, res) => {
//   res.send("working");
// });

app.use("/products", productRoute);

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`server running on port ${port}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
// DB_URL=mongodb://localhost:27017/memory
