import { Router } from "express";
import transectionRouter from "../module/transection/routes.js";

const router = Router()
router.use('/transection', transectionRouter)

export default router