import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDb.js";

const app = express();
const PORT = 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);
//app.get("/", (req, res) => {
    // root route http://localhost:5000/
  //  res.send("Hello World!!!");
//});

app.use((req, res, next) => {
  res.status(404).send("Route not found");
});



app.listen(PORT,() => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});
