import { Router } from "express";
import transectionRouter from "../module/transection/routes.js";

const router = Router()
router.get("/", (req, res) => {
    res.send("Expense Tracker API Working...");
});

router.use('/transection', transectionRouter)

export default router