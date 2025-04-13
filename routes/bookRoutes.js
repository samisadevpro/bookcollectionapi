import express from "express";
import { createBook } from "../controllers/bookController.js";

const router = express.Router();

router.post("/books", createBook);

export default router;
