import React, { useState } from 'react'

const Mapping = () => {
    var[users,setUsers]=useState(["101","dhiya","dhiya@gmail.com"])
  return (
    <div>
        <ol>
            {users.map((value,index)=>{
                return(
                    <li>{value}</li>
                )
            })}
        </ol>
    </div>
  )
}

export default Mapping