import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DataLoad = () => {
    var[users,setUsers]=useState([])
    
const loadData = () =>{

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        console.log(res.data)
        setUsers(res.data)
    
    })
    .catch((err=>console.log(err)))

}

    return (
      <div>
        <Button variant='contained' onClick={loadData}>LOAD DATA</Button>
        <TableContainer>
          <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{color:'red'}}>Id</TableCell>
                    <TableCell style={{color:'red'}}>Name</TableCell>
                    <TableCell style={{color:'red'}}>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((val,i)=>{
                    return(
                       <TableRow>
                        <TableCell>{val.Id}</TableCell>
                        <TableCell>{val.Name}</TableCell>
                        <TableCell>{val.Email}</TableCell>
                       </TableRow>
                    )
                })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )}


export default DataLoad