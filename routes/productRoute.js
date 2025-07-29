import { showProducts } from "../controllers/productController.js";
import express from "express";
const router = express.Router();
router.get("/showproducts", showProducts);
router.get("/deleteproducts/id", deleteProduct);
router.get("/updateproducts/id", updateProduct);
export default router;
