import express from "express";
import {
  getManager,
  createManager,
  updateManager,
  getManagerProperties,
} from "../controllers/managerControllers.js";

const router = express.Router();

router.get("/:cognitoId", getManager);
router.get("/:cognitoId/properties", getManagerProperties);
router.put("/:cognitoId", updateManager);
router.post("/", createManager);

export default router;
