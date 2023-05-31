import { Button, FormControl, FormGroup, Input, InputLabel } from '@mui/material'
import React, { useState } from 'react';
import '../App.css';
import { addUser } from '../service/api';

const AddUsers = () => {
  const [user,setUser] = useState({
      name:"",
      username:"",
      email:"",
      phone:""
  })
  const handleInput =(e)=>{
     setUser({...user,[e.target.name]:e.target.value});
     console.log(user);
  }
  const addUserDetails =()=>{
       addUser(user);
  }
  return (
    <div className='main'>
       <h1 className='h1'>Add User</h1>
       <FormGroup className='form'>
           <FormControl>
                <InputLabel>Name</InputLabel>
                    <Input onChange={handleInput} name="name" /> 
           </FormControl>
           <FormControl>
                <InputLabel>Username</InputLabel>
                    <Input onChange={handleInput} name="username"/> 
           </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                    <Input onChange={handleInput} name="email"/> 
           </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                    <Input onChange={handleInput} name="phone"/> 
           </FormControl>
           <FormControl>
              <Button onClick={addUserDetails} variant='contained'>Add User</Button>
           </FormControl>
       </FormGroup>
    </div>
  )
}

export default AddUsers
