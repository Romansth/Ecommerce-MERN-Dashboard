import express from "express";
import { getProducts } from "../controllers/client.js"
import { getCustomers } from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers)

export default router;