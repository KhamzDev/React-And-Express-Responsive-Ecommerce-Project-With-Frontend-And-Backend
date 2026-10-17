import { Router } from "express";
import productRouter from "./product.mjs";
import cartRouter from "./cart.mjs";

const router = Router();

router.use(productRouter);
router.use(cartRouter);

export default router;