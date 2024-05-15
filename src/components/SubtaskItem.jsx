// import React from 'react';
import Checkbox from '@mui/material/Checkbox';

/* eslint-disable react/prop-types */

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString();
}

export default function SubtaskItem({ subtask, toggleSubtaskCompletion }) {
  const difficultyStyle = {
      Easy: {
          color: 'green',
          border: '1px solid green',
          borderRadius: '4px',
          padding: '2px 6px',
          display: 'inline-block',
          marginLeft: '10px'
      },
      Medium: {
          color: 'orange',
          border: '1px solid orange',
          borderRadius: '4px',
          padding: '2px 6px',
          display: 'inline-block',
          marginLeft: '10px'
      },
      Hard: {
          color: 'red',
          border: '1px solid red',
          borderRadius: '4px',
          padding: '2px 6px',
          display: 'inline-block',
          marginLeft: '10px'
      }
  };

  return (
    <div className="subtask-item">
        <Checkbox
            checked={subtask.completed}
            onChange={toggleSubtaskCompletion}
            sx={{
              color: subtask.completed ? 'default' : 'white', // Change color based on task completion
              '&.Mui-checked': {
                color: 'default',
              },
            }} 
        />
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p>{subtask.title}</p>
            <div>
                <small style={{ color: '#666', fontSize: '0.8rem' }}>
                    Due: {formatDate(subtask.deadline)}
                </small>
                <small style={difficultyStyle[subtask.difficulty]}>
                    {subtask.difficulty}
                </small>
            </div>
        </div>
    </div>
);
}

