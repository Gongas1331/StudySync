import { useState, useEffect } from 'react';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Addtask from '../components/Addtask';
import { Link } from 'react-router-dom';
import { FaGift } from 'react-icons/fa';
import { Box, Typography, IconButton, Toolbar, AppBar, Checkbox } from '@mui/material';
import { FaFire } from 'react-icons/fa';

/* eslint-disable react/prop-types */


// CurrencyBar Component
function CurrencyBar({ streakfreeze, coins }) {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
    <Link to="/store">
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Box display="flex" alignItems="center">
            <IconButton edge="start" color="lightBlue" aria-label="menu" sx={{ mr: 1 }}>
              <WhatshotIcon />
            </IconButton>
            <Typography variant="h6" color="light" component="div">
              {streakfreeze}
            </Typography>
          </Box>
            <Box display="flex" alignItems="center">
              <Typography variant="h6" color="light" component="div">
                {coins}
              </Typography>
              <IconButton edge="start" color="yellow" aria-label="menu" sx={{ ml: 1 }}>
                <MonetizationOnIcon />
              </IconButton>
            </Box>
        </Box>
      </Toolbar>
          </Link>
    </AppBar>
  );
}

// Weekly Activity Tracker Component
function WeeklyActivityTracker({ daysCompleted }) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <>
      <Typography sx={{ pb: 1 }} variant="h4jin" color="inherit" component="div">
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
      setAllTasksCompleted(true);
      setDaysCompleted(daysCompleted + 1);
    }
  }, [completedTasks, totalTasks, streakfreeze, allTasksCompleted, daysCompleted]);

  const coins = 2000;

  return (
    <div className="homepage">
      <CurrencyBar streakfreeze={streakfreeze} coins={coins} />
      <WeeklyActivityTracker daysCompleted={daysCompleted} />
      <DailyTasksGoal tasksCompleted={completedTasks} totalTasks={totalTasks} />
      <ActivitiesList tasks={tasks} onToggleTaskCompletion={toggleTaskCompletion} date={date} />
      <Addtask />
    </div>
  );
}
