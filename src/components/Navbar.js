import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <AccountBalanceIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Citi Bank App
          </Typography>
          <Button color="inherit" onClick={()=> navigate("/login")}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
 
}

export default Navbar;




// return (
//   <div className="bg-gray-800">
//   <div className='h-16 px-8 flex items-center'>
//     <p className='text-white font-bold'>Citi Bank App</p>
//   </div>
// </div>
// )
