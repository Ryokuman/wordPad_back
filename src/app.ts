import { Router } from "express";
import user from "@routes/user";

const router = Router();

router.use("/api/user", user);

export default router;
