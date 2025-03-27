import express from 'express';
import { createTaskController, getTasksController, getTaskByIdController, updateTaskByIdController, deleteTaskByIdController } from '../controllers/tasks_controller.js';

const router = express.Router();

// Define routes

// Create a new task
router.post('/create', createTaskController);

// list all tasks
router.get('/All', getTasksController);

// Get a task by ID
router.get('/:id', getTaskByIdController);

// Update a task by ID
router.put('/:id', updateTaskByIdController);

// Delete a task by ID
router.delete('/:id', deleteTaskByIdController);

export default router;