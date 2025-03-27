import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the absolute path of tasks.json
const __filename = fileURLToPath(import.meta.url); // Get the filename of the current module
const __dirname = path.dirname(__filename); // Get the directory name of the current module
const tasksFilePath = path.join(__dirname, '../data/tasks.json'); // Get the absolute path of tasks.json

// Load tasks from the JSON file
const loadTasks = () => {
    if (!fs.existsSync(tasksFilePath)) return [];
    return JSON.parse(fs.readFileSync(tasksFilePath, 'utf8'));
};

// Save tasks to the JSON file
const saveTasks = (tasks) => {
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2), 'utf8');
};

// Create a class for TaskServices
export class TaskServices {
    constructor() {
        this.tasks = loadTasks(); // Load tasks from file
    }

    // Create a new task
    createTask(newTask) {
        newTask.id = this.tasks.length + 1; // Auto-increment ID
        this.tasks.push(newTask); // Add the new task to the tasks array
        saveTasks(this.tasks); // Save the tasks to the file
        return newTask;
    }
}

// Export an instance of the class
export const taskServices = new TaskServices();

