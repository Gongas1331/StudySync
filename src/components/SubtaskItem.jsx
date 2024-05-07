import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';


function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString();
}

function SubtaskItem({ subtask, toggleSubtaskCompletion }) {
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
              color="primary"
          />
          <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body1">{subtask.title}</Typography>
              <div>
                  <Typography variant="body2" style={{ color: '#666', fontSize: '0.8rem' }}>
                      Due: {formatDate(subtask.deadline)}
                  </Typography>
                  <Typography variant="body2" style={difficultyStyle[subtask.difficulty]}>
                      {subtask.difficulty}
                  </Typography>
              </div>
          </div>
      </div>
  );
}

export default SubtaskItem;
