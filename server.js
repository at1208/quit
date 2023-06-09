const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").createServer(app);

const userRoutes = require("./routers/userRouter");
const categoryRoutes = require("./routers/categoryRouter");
const tagRoutes = require("./routers/tagRouter");
const commentRoutes = require("./routers/commentRouter");
const blogRoutes = require("./routers/blogRouter");

require("./socket")(http);
require("dotenv").config();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.json());
app.use(cors());

app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", tagRoutes);
app.use("/api", commentRoutes);
app.use("/api", blogRoutes);

const port = process.env.PORT || 8000;

http.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
