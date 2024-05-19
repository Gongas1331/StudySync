import { useState, useEffect } from 'react';
import Addtask from '../components/Addtask';
import { FaGift } from 'react-icons/fa';
import { FaFire } from 'react-icons/fa';
import Header from '../components/Header';
import CurrencyBar from '../components/CurrencyBar';
import { Checkbox, Typography, Box } from '@mui/material';

/* eslint-disable react/prop-types */

// Weekly Activity Tracker Component
function WeeklyActivityTracker({ daysCompleted }) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <>
      <Typography sx={{ pb: 1 }} variant="h5" color="inherit" component="div">
        Weekly Activity
      </Typography>
      <div className="weekly-tracker">
        {daysOfWeek.map((day, index) => (
          <div key={index} className={`day ${index < daysCompleted ? 'completed' : ''}`}>
            {day}
          </div>
        ))}
        <div className={`gift-icon ${daysCompleted === 7 ? 'completed' : ''}`}>
          <FaGift />
        </div>
      </div>
    </>
  );
}

// Daily Tasks Goal Component
function DailyTasksGoal({ tasksCompleted, totalTasks }) {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ margin: '20px', marginLeft: '1.1em' }}>
      <Typography variant="h6">
        Daily Tasks
      </Typography>
      <Box display="flex" alignItems="center">
        <Typography variant="h6">
          {tasksCompleted}/{totalTasks}
        </Typography>
        <FaFire size={24} />
      </Box>
    </Box>
  );
}


// Activities List Component
function ActivitiesList({ tasks, onToggleTaskCompletion, date }) {
  
  const formattedDate = new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="activities-list">
      <div className="date-container">
        <Typography variant="h6">
          {formattedDate}
        </Typography>
      </div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggleTaskCompletion={onToggleTaskCompletion} />
      ))}
    </div>
  );
}

// TaskItem Component
function TaskItem({ task, onToggleTaskCompletion }) {
  return (
    <Box display="flex" alignItems="center">
      <Checkbox 
        checked={task.completed} 
        onChange={() => onToggleTaskCompletion(task.id)} 
        sx={{
          color: task.completed ? 'default' : 'white', // Change color based on task completion
          '&.Mui-checked': {
            color: 'default',
          },
        }} 
      />
      <Typography style={{ color: task.completed ? 'gray' : 'white' }}>
        {task.title} - {task.difficulty}
      </Typography>
    </Box>
  );
}

// Homepage Component
export default function Homepage() {
  const [tasks, setTasks] = useState([
    // Placeholder tasks for demonstration
    { id: 1, title: "Go to the gym", completed: false, difficulty: "Medium" },
    { id: 2, title: "Read 10 pages", completed: false, difficulty: "Easy" }
  ]);

  const toggleTaskCompletion = id => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const [streakfreeze, setStreakfreeze] = useState(67);
  const [coins, setCoins] = useState(2000);
  const [allTasksCompleted, setAllTasksCompleted] = useState(false);
  const [daysCompleted, setDaysCompleted] = useState(4); 

  // Placeholder functions for task actions
  const addTask = category => console.log("Add task to category:", category);

  // Placeholder completed tasks count and total tasks
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  
  const date = new Date(); // get today's date

  useEffect(() => {
    if (completedTasks === totalTasks && !allTasksCompleted) {
      setStreakfreeze(streakfreeze + 1);
      setCoins(coins + 100);
      setAllTasksCompleted(true);
      setDaysCompleted(daysCompleted + 1);
    }
  }, [completedTasks, totalTasks, streakfreeze, coins, allTasksCompleted, daysCompleted]);

  return (
    <div className="homepage">
      <Header pagename={'Home'}></Header>
      <CurrencyBar streakfreeze={streakfreeze} coins={coins} />
      <WeeklyActivityTracker daysCompleted={daysCompleted} />
      <DailyTasksGoal tasksCompleted={completedTasks} totalTasks={totalTasks} />
      <ActivitiesList tasks={tasks} onToggleTaskCompletion={toggleTaskCompletion} date={date} />
      <Addtask />
    </div>
  );
}
