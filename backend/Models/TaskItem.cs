using System;

namespace backend.Models
{
    public class TaskItem
    {
        // 1. The Unique Identifier for the database
        public long Id { get; set; }

        // 2. The title description of the project task
        public string Title { get; set; } = string.Empty;

        // 3. The weight/difficulty score (1, 3, 5, or 8 story points)
        public int Points { get; set; }

        // 4. Current status block (Todo, In Progress, Done)
        public string Status { get; set; } = "Todo";

        // 5. The date timestamp recording when the card was initialized
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
