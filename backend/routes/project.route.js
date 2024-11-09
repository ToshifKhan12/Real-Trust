import express from "express"
const router = express.Router();
import  {getProjects, addProject, updateProject, deleteProject} from "../controllers/project.controller.js"

// GET all projects
router.get('/', getProjects);

// POST a new project (Admin only)
router.post('/', addProject);

// PUT update a project by ID (Admin only)
router.put('/:id', updateProject);

// DELETE a project by ID (Admin only)
router.delete('/:id', deleteProject);

export default router;
