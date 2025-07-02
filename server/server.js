import express from "express";
import dotenv from "dotenv/config.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

app.use(cors({credentials: true}));
app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});
app.listen(PORT, ()=> console.log(`Server is running on port http://localhost:${PORT}`));