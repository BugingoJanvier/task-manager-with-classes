import express from 'express';
import { createTaskController } from '../controllers/tasks_controller.js';

const router = express.Router();

// Define routes

router.post('/create', createTaskController);

export default router;