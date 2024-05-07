import React, { useState } from 'react';
import SubtaskItem from './SubtaskItem';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import LinearProgress from '@material-ui/core/LinearProgress';

function calculateProgress(subtasks) {
    const completedSubtasks = subtasks.filter(subtask => subtask.completed).length;
    const totalSubtasks = subtasks.length;
    return (completedSubtasks / totalSubtasks) * 100;
}

function TaskItem({ task, toggleTaskCompletion, toggleSubtaskCompletion, categoryId }) {
  const [expanded, setExpanded] = useState(false);
  const progress = calculateProgress(task.subtasks);

  return (
      <div className="task-item">
          <div className="task-header" onClick={() => setExpanded(!expanded)}>
              <Checkbox
                  checked={task.completed}
                  onChange={toggleTaskCompletion}
                  color="primary"
              />
              {task.title}
              <IconButton onClick={() => setExpanded(!expanded)} edge="end" size="small">
                  {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
          </div>
          <LinearProgress variant="determinate" value={progress} style={{ width: '100%', marginTop: '5px' }} />
          {expanded && (
              <div className="subtasks-container">
                  {task.subtasks.map(subtask => (
                      <SubtaskItem
                          key={subtask.id}
                          subtask={subtask}
                          toggleSubtaskCompletion={() => toggleSubtaskCompletion(categoryId, task.id, subtask.id)}
                      />
                  ))}
              </div>
          )}
      </div>
  );
}

export default TaskItem;
