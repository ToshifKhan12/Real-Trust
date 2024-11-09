import express from "express"
const router = express.Router();
import  {getClients, addClient, updateClient, deleteClient} from "../controllers/client.controller.js"

// GET all clients
router.get('/', getClients);

// POST a new client (Admin only)
router.post('/', addClient);

// PUT update a client by ID (Admin only)
router.put('/:id', updateClient);

// DELETE a client by ID (Admin only)
router.delete('/:id', deleteClient);

export default router;
