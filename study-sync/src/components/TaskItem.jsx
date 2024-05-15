import { useState } from 'react';
import SubtaskItem from './SubtaskItem';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import LinearProgress from '@mui/material/LinearProgress';

/* eslint-disable react/prop-types */


function calculateProgress(subtasks) {
    const completedSubtasks = subtasks.filter(subtask => subtask.completed).length;
    const totalSubtasks = subtasks.length;
    return (completedSubtasks / totalSubtasks) * 100;
}

export default function TaskItem({ task, toggleTaskCompletion, toggleSubtaskCompletion }) {
    const [expanded, setExpanded] = useState(false);
    const progress = calculateProgress(task.subtasks);

    return (
        <div className="task-item">
            <div className="task-header" onClick={() => setExpanded(!expanded)}>
                <Checkbox
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
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
                            toggleSubtaskCompletion={() => toggleSubtaskCompletion(task.id, subtask.id)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}