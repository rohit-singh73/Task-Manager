Rohit Singh

Q.1 How long did you spend on the coding test?

Ans:- I spent approximately 20-24 hours on the coding test. This time included setting up the environment, implementing the task management application features, debugging issues, and refining the functionality based on evolving requirements.

Q.2 What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

Ans:- One of the most useful features added to the recent versions of JavaScript (ES2020) is the Optional Chaining (?.) operator. It simplifies accessing deeply nested properties without having to check each level for null or undefined.

Example:
In the task management application, optional chaining was used to handle potential undefined values when accessing task properties:

js
Copy code
// Safely access the task's status and priority
const taskStatus = task?.status ?? "Pending";
const taskPriority = task?.priority ?? "Low";

// Handling nested object access
const dueDate = task?.deadline?.date ?? "No deadline set";
console.log(`Task Status: ${taskStatus}, Priority: ${taskPriority}, Due Date: ${dueDate}`);
This feature reduces the need for multiple if checks and makes the code cleaner and more readable.

Q.3 How would you track down a performance issue in production? Have you ever had to do this?

Ans:- To track down a performance issue in production, I would follow a systematic approach:

Monitoring Tools: Use performance monitoring tools like New Relic, Datadog, or Google Analytics to identify bottlenecks in the application.
Browser DevTools: Utilize the browser's developer tools (Chrome DevTools) to analyze network requests, JavaScript performance, and memory usage.
Profiling and Logs: Use console.time() and console.timeEnd() to measure execution time for specific functions. Additionally, server-side logs can provide insights into slow API responses.
Heap Snapshots: For memory leaks, take heap snapshots to identify memory-consuming objects.
Database Analysis: For backend issues, use database profiling tools to identify slow queries.
Experience: Yes, I have had to diagnose performance issues in production. Once, I optimized an API endpoint that was causing high response times by adding caching and optimizing the database query.

Q.4 If you had more time, what additional features or improvements would you consider adding to the task management application?

Ans:-  If I had more time, I would consider adding the following features and improvements:

1. User Authentication: Implement user authentication and authorization to allow users to securely log in and manage their tasks.

2. Drag-and-Drop Functionality: Add drag-and-drop functionality to the task board for easy prioritization and status updates.

3. Real-time Sync: Use WebSockets to enable real-time updates of the task board across different devices or users

4. Notifications and Reminders: Integrate notifications to remind users of upcoming deadlines and overdue tasks.

5. Data Persistence with Backend: Instead of using localStorage, implement a backend using Node.js and MongoDB to store tasks persistently and securely.

6. Accessibility Improvements: Enhance the accessibility of the app for users with disabilities by adding ARIA labels and improving keyboard navigation.
