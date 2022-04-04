const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoute = require("./routes/User");
const authRoute = require("./routes/Auth");
const productRoute = require("./routes/Product");
const cartRoute = require("./routes/Cart");
const orderRoute = require("./routes/Order");
const stripeRoute = require("./routes/Stripe");

const cors = require("cors");


dotenv.config();

mongoose
  .connect(process.env.MONGOOSE_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/carts", cartRoute);
app.use("/orders", orderRoute);
app.use("/checkout", stripeRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("Backend server is running!");
});