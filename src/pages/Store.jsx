import { useState } from 'react';
import '../App.css';
import Header from '../components/Header';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CurrencyBar from '../components/CurrencyBar';
import { Tabs, Tab, Button, Box } from '@mui/material';

export default function Store() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const frameItems = [
    { type: 1, name: 'Tophat', price: 100 },
    { type: 1, name: 'Spinner', price: 200 },
    { type: 1, name: 'Flower', price: 300 },
    { type: 1, name: 'Summer', price: 400 },
  ];
  const iconItems = [
    { type: 2, name: 'Yeti', price: 100 },
    { type: 2, name: 'Shark', price: 200 },
    { type: 2, name: 'Dog', price: 300 },
    { type: 2, name: 'Ninja', price: 400 },
  ];
  const themeItems = [
    { type: 3, name: 'Monochrome', price: 100 },
    { type: 3, name: 'Sunset', price: 200 },
    { type: 3, name: 'Midnight', price: 300 },
    { type: 3, name: 'Candy', price: 400 },
  ];
  const titleItems = [
    { type: 4, name: 'Mr. Worldwide', price: 100 },
    { type: 4, name: 'Bigbrain', price: 200 },
    { type: 4, name: 'Gymrat', price: 300 },
    { type: 4, name: 'Gigachad', price: 400 },
  ];

  const [streakfreeze] = useState(68);
  const [coins, setCoins] = useState(2100);

  const buyItem = (price) => {
    if (coins >= price) {
      setCoins(coins - price);
    } else {
      alert('Not enough coins!');
    }
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
      {value === 0 && <Box>{frameItems.map(item => <p key={item.name}>{item.name} - {item.price} <MonetizationOnIcon/> <Button variant="contained" onClick={() => buyItem(item.price)}>Buy</Button></p>)}</Box>}
      {value === 1 && <Box>{iconItems.map(item => <p key={item.name}>{item.name} - {item.price} <MonetizationOnIcon/> <Button variant="contained" onClick={() => buyItem(item.price)}>Buy</Button></p>)}</Box>}
      {value === 2 && <Box>{themeItems.map(item => <p key={item.name}>{item.name} - {item.price} <MonetizationOnIcon/> <Button variant="contained" onClick={() => buyItem(item.price)}>Buy</Button></p>)}</Box>}
      {value === 3 && <Box>{titleItems.map(item => <p key={item.name}>{item.name} - {item.price} <MonetizationOnIcon/> <Button variant="contained" onClick={() => buyItem(item.price)}>Buy</Button></p>)}</Box>}
    </Box>
  );
}