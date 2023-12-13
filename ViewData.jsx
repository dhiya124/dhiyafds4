import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewData = () => {
    var[users,setUsers]=useState([])
    var[loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        console.log(res.data)
        setUsers(res.data)
        setLoading(false)
    
    })
    .catch((err=>console.log(err)))


    },[])

    
  return (
    <div>
        {loading?<CircularProgress color='primary'/>:<TableContainer>
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
                            <TableCell>{val.name}</TableCell>
                            <TableCell>{val.username}</TableCell>
                            <TableCell>{val.email}</TableCell>
                        </TableRow>
                       
                    )
                })}
            </TableBody>
        </Table>
      </TableContainer>}

    </div>
  )
}

export default ViewData