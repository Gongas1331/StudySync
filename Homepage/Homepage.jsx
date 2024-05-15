import React, { useState } from 'react';
import { FaBook, FaUsers, FaRunning, FaBroom, FaStar, FaGift, FaFire } from 'react-icons/fa';

// Weekly Activity Tracker Component
function WeeklyActivityTracker({ daysCompleted }) {
  return (
    <div className="weekly-tracker">
      {Array.from({ length: 7 }).map((_, index) => (
        <div key={index} className={`day ${index < daysCompleted ? 'completed' : ''}`}></div>
      ))}
      {daysCompleted === 7 && <FaGift />}
    </div>
  );
}

// Daily Tasks Goal Component
function DailyTasksGoal({ tasksCompleted, totalTasks }) {
  const percentage = (tasksCompleted / totalTasks) * 100;

  return (
    <div className="daily-goals">
      <span>Complete tasks: {tasksCompleted}/{totalTasks}</span>
      <FaFire className={percentage >= 100 ? 'lit' : ''} />
    </div>
  );
}

// Activities List Component
function ActivitiesList({ tasks }) {
  return (
    <div className="activities-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

// TaskItem Component (Placeholder)
function TaskItem({ task }) {
  return (
    <div className="task-item">
      <input type="checkbox" checked={task.completed} onChange={() => {}} />
      {task.title} - {task.difficulty}
    </div>
  );
}

// Add Task Section Component
function AddTaskSection({ onAddTask }) {
  return (
    <div className="add-task-section">
      <button onClick={() => onAddTask('Study')}><FaBook /> For Study</button>
      <button onClick={() => onAddTask('Social')}><FaUsers /> For Social</button>
      <button onClick={() => onAddTask('Fitness')}><FaRunning /> Fitness</button>
      <button onClick={() => onAddTask('Chores')}><FaBroom /> Chore</button>
      <button onClick={() => onAddTask('Self-Improvement')}><FaStar /> Self-Improvement</button>
    </div>
  );
}

// Homepage Component
function Homepage() {
  const [tasks, setTasks] = useState([
    // Placeholder tasks for demonstration
    { id: 1, title: "Go to the gym", completed: false, difficulty: "Medium" },
    { id: 2, title: "Read 10 pages", completed: false, difficulty: "Easy" }
  ]);

  // Placeholder functions for task actions
  const addTask = category => console.log("Add task to category:", category);

  // Placeholder completed tasks count and total tasks
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className="homepage">
      <WeeklyActivityTracker daysCompleted={4} />
      <DailyTasksGoal tasksCompleted={completedTasks} totalTasks={totalTasks} />
      <ActivitiesList tasks={tasks} />
      <AddTaskSection onAddTask={addTask} />
    </div>
  );
}

export default Homepage;