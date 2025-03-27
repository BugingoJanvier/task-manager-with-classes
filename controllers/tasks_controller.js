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

//get all tasks

const getTasksController = async (req, res) => {
    try{
        const tasks = await taskServices.getTasks();
        res.status(200).json(tasks); // Return all tasks
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" }); // Return a 500 Internal Server Error if something goes wrong
    }
};

//get task by id
const getTaskByIdController = async (req, res) => {
    const { id } = req.params; // Get the task ID from the request parameters
    try {

        const task = await taskServices.getTaskById(Number(id)); // Get the task by ID
        
        if (task) {
                res.status(200).json(task); // Return the task if it exists
        } else { 
                res.status(404).json({ message: `Task with ID ${id} not found` }); // Return a 404 Not Found if the task doesn't exist
        }

    } catch (error) 
            {
                res.status(500).json({ message: "Internal Server Error" }); // Return a 500 Internal Server Error if something goes wrong
            }
};

//update task by id
const updateTaskByIdController = async (req, res) => {
    const { id } = req.params; // Get the task ID from the request parameters
    try{
        const { title, description, completed } = req.body; // Get the title and description from the request body
        const updatedTask = await taskServices.updateTaskById(Number(id), { title, description, completed }); // Update the task by ID
        res.status(200).json(updatedTask); // Return the updated task
    }catch (error) {
        res.status(500).json({ message: "Internal Server Error" }); // Return a 500 Internal Server Error if something goes wrong
    }
};

// Delete task by id
const deleteTaskByIdController = async (req, res) => {
    const { id } = req.params; // Get the task ID from the request parameters
    try {

        const deletedItem = await taskServices.deleteTaskById(Number(id)); // Delete the task by ID
        res.status(204).end(); // Return a 204 No Content status
        
    } catch (error) {

        res.status(500).json({ message: "Internal Server Error" }); // Return a 500 Internal Server Error if something goes wrong
    }
};

export { 
        createTaskController, 
        deleteTaskByIdController, 
        getTaskByIdController, 
        getTasksController, 
        updateTaskByIdController 
        }; 
        
// Export the controller functions for use in routes/taskRoutes.js
