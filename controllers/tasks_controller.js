import { taskServices } from '../services/taskServices.js'; // Import the taskServices object from services/taskServices.js

// Create a new task
const createTaskController = async (req, res) => {
    const { title, description, completed } = req.body; // Get the title and description from the request body

    try {
        // Pass an object instead of separate values
        const newTask = await taskServices.createTask({ title, description, completed });

        res.status(201).json(newTask); // Return the new task
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" }); // Return a 500 Internal Server Error if something goes wrong
    }
};



export { createTaskController }; // Export the createTaskController function
