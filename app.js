import express from 'express';
import taskRoutes from './routes/taskRoutes.js';

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use the task routes
app.use('/', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});