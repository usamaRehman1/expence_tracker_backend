import express from "express";
import dotenv from "dotenv";
import { ENV } from "./src/constant/index.js";
import { connectDB } from "./src/helper/connectDB.js";
import routers from "./src/routes/index.js";
dotenv.config();
connectDB();
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Expense Tracker Backend Running...");
});

app.use("/api", routers);
// app.use("/api", routers);

const PORT = ENV.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is conected on the port of ${PORT}`)
})
export default app;