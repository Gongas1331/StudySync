import { useState } from 'react';
import TaskItem from '../components/TaskItem';
import { FaBook, FaBriefcase, FaUsers, FaBroom, FaRunning, FaLightbulb } from 'react-icons/fa';
import Header from '../components/Header';

const categoryIcons = {
  'Study': <FaBook />,
  'Work': <FaBriefcase />,
  'Social': <FaUsers />,
  'Fitness': <FaRunning />,
  'Chores': <FaBroom />,
  'Self-Improvement': <FaLightbulb />
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
    category: "Work",
    tasks: [
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

export default function Tasks() {
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
    <Header pagename={'Tasks'}></Header>
      {tasks.map(category => (
        <div key={category.category}>
          <h3>{categoryIcons[category.category]} {category.category}</h3>
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

