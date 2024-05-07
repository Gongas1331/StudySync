import React, { useState } from 'react';
import TaskItem from '../components/TaskItem';
import { FaLaptopCode, FaUserFriends, FaRunning, FaBroom, FaStar } from 'react-icons/fa';

const categoryIcons = {
  Study: <FaLaptopCode />,
  Social: <FaUserFriends />,
  Fitness: <FaRunning />,
  Chores: <FaBroom />,
  'Self-Improvement': <FaStar />
};

const initialTasks = [
  {
    category: "Study",
    tasks: [
      {
        id: 1,
        title: 'IHC Project',
        completed: false,
        subtasks: [
          { id: 1, title: 'Requirements', completed: false, difficulty: 'Medium', deadline: '2024-05-10' },
          { id: 2, title: 'Prototyping', completed: false, difficulty: 'Hard', deadline: '2024-06-01' },
          { id: 3, title: 'Final Delivery', completed: false, difficulty: 'Hard', deadline: '2024-06-15' }
        ]
      },
      {
        id: 2,
        title: 'Go Study',
        completed: false,
        subtasks: [
          { id: 1, title: 'Read Articles', completed: false, difficulty: 'Easy', deadline: '2024-05-20' },
          { id: 2, title: 'Summary Notes', completed: false, difficulty: 'Medium', deadline: '2024-05-25' }
        ]
      }
    ]
  },
  {
    category: "Social",
    tasks: [
    ]
  },
  {
    category: "Fitness",
    tasks: [
      {
        id: 3,
        title: 'Run',
        completed: false,
        subtasks: [
          { id: 1, title: 'Run 5km', completed: true, difficulty: 'Medium' },
          { id: 2, title: 'Run 5km', completed: false, difficulty: 'Medium' }
        ]
      }
    ]
  },
  {
    category: "Self-Improvement",
    tasks: [
      {
        id: 4,
        title: 'Read',
        completed: false,
        subtasks: [
          { id: 1, title: 'Read 10 pages', completed: false, difficulty: 'Easy' },
          { id: 2, title: 'Read 10 pages', completed: false, difficulty: 'Easy' }
        ]
      }
    ]
  },
  {
    category: "Chores",
    tasks: [
     
    ]
  }
];

function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTaskCompletion = (categoryId, taskId) => {
    setTasks(prev => prev.map(category => 
      category.category === categoryId ? {
        ...category,
        tasks: category.tasks.map(task => 
          task.id === taskId ? {
            ...task,
            completed: !task.completed,
            subtasks: task.subtasks.map(subtask => ({
              ...subtask,
              completed: !task.completed
            }))
          } : task
        )
      } : category
    ));
  };

  const toggleSubtaskCompletion = (categoryId, taskId, subtaskId) => {
    setTasks(prev => prev.map(category =>
      category.category === categoryId ? {
        ...category,
        tasks: category.tasks.map(task =>
          task.id === taskId ? {
            ...task,
            subtasks: task.subtasks.map(subtask =>
              subtask.id === subtaskId ? { ...subtask, completed: !subtask.completed } : subtask
            ),
            completed: task.subtasks.every(subtask => subtask.id === subtaskId ? !subtask.completed : subtask.completed)
          } : task
        )
      } : category
    ));
  };

  return (
    <div className="task-list">
      {tasks.map(category => (
        <div key={category.category}>
          <h2>{categoryIcons[category.category]} {category.category}</h2>
          {category.tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTaskCompletion={() => toggleTaskCompletion(category.category, task.id)}
              toggleSubtaskCompletion={toggleSubtaskCompletion}
              categoryId={category.category}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Tasks;