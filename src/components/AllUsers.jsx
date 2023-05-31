import { Table, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

const AllUsers = () => {
  return (
    <div>
       <Table>
          <TableHead>
               <TableRow>
                   <TableCell>Id</TableCell>
                   <TableCell>Name</TableCell>
                   <TableCell>Username</TableCell>
                   <TableCell>Email</TableCell>
                   <TableCell>Phone</TableCell>
               </TableRow>
          </TableHead>
       </Table>
    </div>
  )
}

export default AllUsers
