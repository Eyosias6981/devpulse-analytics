using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controllers
{
    // This makes the URL route: http://localhost:5163/api/tasks
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : ControllerBase
    {
        // 1. A temporary static list acting as our in-memory database storage
        private static readonly List<TaskItem> _tasks = new List<TaskItem>
        {
            new TaskItem { Id = 1, Title = "Connect C# Database Endpoints", Points = 5, Status = "In Progress" },
            new TaskItem { Id = 2, Title = "Fix Mantine AppShell Resize Jump", Points = 3, Status = "Done" }
        };

        // 2. GET Method: Fetches and returns all tasks
        // URL: GET /api/tasks
        [HttpGet]
        public ActionResult<IEnumerable<TaskItem>> GetAllTasks()
        {
            return Ok(_tasks);
        }

        // 3. POST Method: Accepts a new task from the frontend and adds it to our list
        // URL: POST /api/tasks
        [HttpPost]
        public ActionResult<TaskItem> CreateTask([FromBody] TaskItem newTask)
        {
            // Simple validation safety net
            if (newTask == null || string.IsNullOrWhiteSpace(newTask.Title))
            {
                return BadRequest("Task title cannot be empty.");
            }

            // Generate a random numeric ID using a timestamp shortcut
            newTask.Id = DateTime.UtcNow.Ticks;
            newTask.CreatedAt = DateTime.UtcNow;

            // Push the item into our static memory array list
            _tasks.Add(newTask);

            // Return a 201 Created status along with the newly generated task object
            return CreatedAtAction(nameof(GetAllTasks), new { id = newTask.Id }, newTask);
        }
        // 4. PUT Method: Modifies an existing task's status to "Done"
        // URL: PUT /api/tasks/{id}/complete
        [HttpPut("{id}/complete")]
        public ActionResult PutCompleteTask(long id)
        {
            // Search through our temporary in-memory list for the matching task ID
            var taskToUpdate = _tasks.FirstOrDefault(task => task.Id == id);

            // Safety Net: If the ID doesn't exist, return a professional 404 error response
            if (taskToUpdate == null)
            {
                return NotFound($"Task with ID {id} was not found.");
            }

            // Update the object's status parameter property
            taskToUpdate.Status = "Done";

            // Return a 204 No Content status, which is the industry standard for a successful update
            return NoContent();
        }



    }

    
}
