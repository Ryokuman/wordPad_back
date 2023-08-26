import { Router } from "express";
import user from "@routes/user";
import word from "@routes/word";

const router = Router();

router.use("/api/user", user);
router.use("/api/word", word);

export default router;
