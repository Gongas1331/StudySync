// import React from 'react';
import { Link } from 'react-router-dom';
import {FaHome,FaTasks,FaRegCalendarAlt,FaUser,FaMedal,FaStore} from 'react-icons/fa';
import '../App.css';

export default function Navbar() {
  return (
    <nav className='navbar'>
    <Link to="/"><button><FaHome /></button></Link>
    <Link to="/tasks"><button><FaTasks/></button></Link>
    <Link to="/calendar"><button><FaRegCalendarAlt/></button></Link>
    <Link to="/profile"><button><FaUser/></button></Link>
    <Link to="/store"><button><FaStore/></button></Link>
    <Link to="/leaderboard"><button><FaMedal /></button></Link>
    </nav>
  );
}     

// export default function Navbar() {
//   const [value, setValue] = React.useState('recents');
//   const ref = React.useRef(null);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   // React.useEffect(() => {
//   //   ref.current.ownerDocument.body.scrollTop = 0;
//   //   setMessages(refreshMessages());
//   // }, [value, setMessages]);

//   return (
//     <Box sx={{ pb: 7, width: '100vw' }} ref={ref}>
//       <CssBaseline />
//       <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
//         <BottomNavigation
//           value={value}
//           onChange={handleChange}
//         >
//           <BottomNavigationAction value="home" icon={<RestoreIcon />} />
//           <BottomNavigationAction value="tasks" icon={<FavoriteIcon />} />
//           <BottomNavigationAction value="calendar" icon={<FavoriteIcon />} />
//           <BottomNavigationAction value="leaderboard" icon={<FavoriteIcon />} />
//           <BottomNavigationAction value="store" icon={<FavoriteIcon />} />
//           <BottomNavigationAction value="profile" icon={<AccountCircleIcon />} />
//         </BottomNavigation>
//       </Paper>
//     </Box>
//   );
// }