import express from "express"
const router = express.Router();
import  {getContacts, submitContact, deleteContact} from "../controllers/contact.controller.js"

// GET all contact form submissions (Admin only)
router.get('/', getContacts);

// POST a new contact form entry
router.post('/', submitContact);

// DELETE a contact form entry by ID (Admin only)
router.delete('/:id', deleteContact);

export default router;
