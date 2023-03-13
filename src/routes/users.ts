import express from "express";
import { createData } from "../controller/user";
const router = express.Router();

// router.get('/', getDAta)
router.post('/', createData)
export default router;
