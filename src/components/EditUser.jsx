import { Button, FormControl, FormGroup, Input, InputLabel } from '@mui/material'
import React, { useState,useEffect } from 'react';
import '../App.css';
import { getUser, editUser } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState({
      name:"",
      username:"",
      email:"",
      phone:""
  });
  const {id} = useParams();
  useEffect(()=>{
       getUserData();
  },[]);
  const getUserData = async () =>{
      let response = await getUser(id);
      setUser(response.data);
  }
  const handleInput =(e)=>{
     setUser({...user,[e.target.name]:e.target.value});
     console.log(user);
  }
  const addUserDetails = async ()=>{
       await editUser(user,id);
       navigate('/allUsers');
  }
  return (
    <div className='main'>
       <h1 className='h1'>Edit User</h1>
       <FormGroup className='form'>
           <FormControl>
                <InputLabel>Name</InputLabel>
                    <Input onChange={handleInput} name="name" value={user.name} /> 
           </FormControl>
           <FormControl>
                <InputLabel>Username</InputLabel>
                    <Input onChange={handleInput} name="username" value={user.username}/> 
           </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                    <Input onChange={handleInput} name="email" value={user.email}/> 
           </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                    <Input onChange={handleInput} name="phone" value={user.phone}/> 
           </FormControl>
           <FormControl>
              <Button onClick={addUserDetails} variant='contained'>Edit User</Button>
           </FormControl>
       </FormGroup>
    </div>
  )
}

export default EditUser
