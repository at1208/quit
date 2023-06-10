import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const app = express();
const http = require("http").createServer(app);

import userRoutes from "./routers/userRouter";
import categoryRoutes from "./routers/categoryRouter";
import tagRoutes from "./routers/tagRouter";
import commentRoutes from "./routers/commentRouter";
import blogRoutes from "./routers/blogRouter";
import initializeSocket from "./socket";
import dotenv from "dotenv";

initializeSocket(http);
dotenv.config();

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
