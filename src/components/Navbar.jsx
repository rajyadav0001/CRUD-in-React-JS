import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { AppBar, Toolbar } from '@mui/material'


const Navbar = () => {
  return (
    <div style={{marginTop:"80px"}}>
       <AppBar>
           <Toolbar>
             <div className='container'>
              <Link to={'/'}><p className='p'>Home</p></Link>
              <Link to={'/allUsers'}><p className='p'>All Users</p></Link>
              <Link to={'/addUsers'}><p className='p'>Add Users</p></Link>
             </div>
           </Toolbar>
       </AppBar>
    </div>
  )
}

export default Navbar
