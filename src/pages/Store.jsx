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
    { name: 'Tophat', price: 100 },
    { name: 'Spinner', price: 200 },
    { name: 'Flower', price: 300 },
    { name: 'Summer', price: 400 },
  ];
  const iconItems = [
    { name: 'Yeti', price: 100 },
    { name: 'Shark', price: 200 },
    { name: 'Dog', price: 300 },
    { name: 'Ninja', price: 400 },
  ];
  const themeItems = [
    { name: 'Monochrome', price: 100 },
    { name: 'Sunset', price: 200 },
    { name: 'Midnight', price: 300 },
    { name: 'Candy', price: 400 },
  ];
  const titleItems = [
    { name: 'Mr. Worldwide', price: 100 },
    { name: 'Bigbrain', price: 200 },
    { name: 'Gigachad', price: 300 },
    { name: 'Gymrat', price: 400 },
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