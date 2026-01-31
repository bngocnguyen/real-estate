import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  getLeasePayments,
  getLeases,
} from "../controllers/leaseControllers.js";
import { create } from "node:domain";
import {
  createApplication,
  listApplications,
  updateApplicationStatus,
} from "../controllers/applicationControllers.js";

const router = express.Router();

router.post("/", authMiddleware(["tenant"]), createApplication);
router.put("/", authMiddleware(["manager"]), updateApplicationStatus);
router.get("/", authMiddleware(["manager", "tenant"]), listApplications);

export default router;
