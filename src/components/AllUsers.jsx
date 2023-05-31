import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { deleteUser, getUsers } from '../service/api';
import '../App.css';
import { Link } from 'react-router-dom';


const AllUsers = () => {
  const[users,setUsers] = useState([]);

  useEffect(()=>{
     getUsersDetails();
  },[])

  const getUsersDetails = async () =>{
      let response = await getUsers();
      setUsers(response.data);
    //   console.log(users);

  }
  const deleteUserData = async (id) =>{
      await deleteUser(id);
      getUsersDetails();
  } 
  return (
    <div className='allUsers'>
      <h1 className='h1'>All Users list</h1>
       <Table>
          <TableHead className='thead'>
               <TableRow>
                   <TableCell>Id</TableCell>
                   <TableCell>Name</TableCell>
                   <TableCell>Username</TableCell>
                   <TableCell>Email</TableCell>
                   <TableCell>Phone</TableCell>
                   <TableCell>Edit</TableCell>
                   <TableCell>Delete</TableCell>

               </TableRow>
          </TableHead>
          <TableBody>
             {
              users.map(user=>(
                  <TableRow key={user.id}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.phone}</TableCell>
                      <TableCell>
                          <Button variant="contained" component={Link} to={`/edit/${user.id}`}>Edit</Button>
                      </TableCell>
                      <TableCell>
                          <Button variant='contained' color="secondary" onClick={()=>deleteUserData(user.id)}>Delete</Button>
                      </TableCell>
                  </TableRow>
              ))
             }
          </TableBody>
       </Table>
    </div>
  )
}

export default AllUsers
