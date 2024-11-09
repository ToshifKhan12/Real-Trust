import express from "express" 
const router = express.Router();
import {getSubscribers, addSubscriber, deleteSubscriber} from "../controllers/subscription.controller.js"

// GET all subscribers (Admin only)
router.get('/', getSubscribers);

// POST a new subscriber
router.post('/', addSubscriber);

// DELETE a subscriber by ID (Admin only)
router.delete('/:id', deleteSubscriber);

export default router;
