import { useState } from 'react';
import Calendar from 'react-calendar';
import { useSwipeable } from 'react-swipeable';
import '../App.css';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    // You can perform additional actions when the date changes if needed
  };

  const handleSwipe = ({ dir }) => {
    if (dir === 'Left') {
      // Swipe left to navigate to the next month
      setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    } else if (dir === 'Right') {
      // Swipe right to navigate to the previous month
      setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    }
  };

  const handlers = useSwipeable({ onSwiped: handleSwipe });

  return (
    <div {...handlers}>
    <AppBar position="static" sx={{marginBottom: '5%'}}>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Calendar
        </Typography>
      </Toolbar>
    </AppBar>
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
      <p>Selected Date: {date.toLocaleDateString()}</p>
    </div>
  );
}