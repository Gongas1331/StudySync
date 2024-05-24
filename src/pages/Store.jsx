import { useState } from 'react';
import '../App.css';
import Header from '../components/Header';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CurrencyBar from '../components/CurrencyBar';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { Tabs, Tab, Box } from '@mui/material';

export default function Store() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [frameItems, setFrameItems] = useState([
    { type: 1, name: 'Tophat', price: 100, purchased: false },
    { type: 1, name: 'Spinner', price: 200, purchased: false },
    { type: 1, name: 'Flower', price: 300, purchased: false },
    { type: 1, name: 'Summer', price: 400, purchased: false },
  ]);
  const [iconItems, setIconItems] = useState([
    { type: 2, name: 'Yeti', price: 100 },
    { type: 2, name: 'Shark', price: 200 },
    { type: 2, name: 'Dog', price: 300 },
    { type: 2, name: 'Ninja', price: 400 },
  ]);
  const [themeItems, setThemeItems] = useState([
    { type: 3, name: 'Monochrome', price: 100 },
    { type: 3, name: 'Sunset', price: 200 },
    { type: 3, name: 'Midnight', price: 300 },
    { type: 3, name: 'Candy', price: 400 },
  ]);
  const [titleItems, setTitleItems] = useState([
    { type: 4, name: 'Mr. Worldwide', price: 100 },
    { type: 4, name: 'Bigbrain', price: 200 },
    { type: 4, name: 'Gymrat', price: 300 },
    { type: 4, name: 'Gigachad', price: 400 },
  ]);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [streakfreeze] = useState(68);
  const [coins, setCoins] = useState(2100);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    if (coins < selectedItem.price) {
      alert('Not enough coins!');
      return;
    }

    setCoins(coins - selectedItem.price);

    switch (selectedItem.type) {
      case 1:
        setFrameItems(prevItems => prevItems.map(i => i.name === selectedItem.name ? { ...i, purchased: true } : i));
        break;
      case 2:
        setIconItems(prevItems => prevItems.map(i => i.name === selectedItem.name ? { ...i, purchased: true } : i));
        break;
      case 3:
        setThemeItems(prevItems => prevItems.map(i => i.name === selectedItem.name ? { ...i, purchased: true } : i));
        break;
      case 4:
        setTitleItems(prevItems => prevItems.map(i => i.name === selectedItem.name ? { ...i, purchased: true } : i));
        break;
      default:
        break;
    }
    setOpen(false);
  };

  return (
    <Box sx={{ width: '100vw' }}>
      <Header pagename={'Store'}></Header>
      <CurrencyBar streakfreeze={streakfreeze} coins={coins} />
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Frames" />
          <Tab label="Icons" />
          <Tab label="Themes" />
          <Tab label="Titles" />
        </Tabs>
      </Box>
      {value === 0 && <Box>{frameItems.map(item => <p key={item.name}>{item.name} - {item.price} <MonetizationOnIcon /> <Button variant="contained" disabled={item.purchased} onClick={() => handleOpen(item)}>{item.purchased ? 'Owned' : 'Buy'}</Button></p>)}</Box>}
      {value === 1 && <Box>{iconItems.map(item => <p key={item.name}>{item.name} - {item.price} <MonetizationOnIcon /> <Button variant="contained" disabled={item.purchased} onClick={() => handleOpen(item)}>{item.purchased ? 'Owned' : 'Buy'}</Button></p>)}</Box>}
      {value === 2 && <Box>{themeItems.map(item => <p key={item.name}>{item.name} - {item.price} <MonetizationOnIcon /> <Button variant="contained" disabled={item.purchased} onClick={() => handleOpen(item)}>{item.purchased ? 'Owned' : 'Buy'}</Button></p>)}</Box>}
      {value === 3 && <Box>{titleItems.map(item => <p key={item.name}>{item.name} - {item.price} <MonetizationOnIcon /> <Button variant="contained" disabled={item.purchased} onClick={() => handleOpen(item)}>{item.purchased ? 'Owned' : 'Buy'}</Button></p>)}</Box>}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Purchase</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to buy {selectedItem?.name} for {selectedItem?.price} coins?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirm}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}