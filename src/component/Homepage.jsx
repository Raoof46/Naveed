import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const [send, setSend]=useState([]);
  const [error, setError]=useState(false);
  const [loading, setLoading]=useState(true);

    const history=useNavigate()
    
    const nextPage=()=>{
      history('nextPage')
    }
    function getUser(){
      axios.get("https://674aab3971933a4e8853229d.mockapi.io/userDetail").then((responce)=>{
        setSend(responce?.send)
      }).catch((error)=>{
        setError(true)
      }).finally((loading)=>{
        setLoading(false)
      })
    }
    useEffect(()=>{
      getUser()
    })

  return (
    <div>
      <div>
    <div style={{backgroundColor:"#B8860B", display:'flex', alignItems:'center', justifyContent:'space-between', height:"60px", }}>
        <div style={{color:"black", fontWeight:"1000", fontFamily:"revert-layer"}}><h2>User Details</h2></div>
        <div><input style={{alignContent:"center"}}  type="text" placeholder='Search' class="form-control" aria-label="Amount (to the nearest dollar)"/>
        </div>
        <div><button type="button" onClick={nextPage} class="btn btn-dark">Create New User</button></div>
    </div>

    </div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">LastName</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">PhoneNo</th>
      <th scope="col">Adress</th>
    </tr>
  </thead>
  <tbody>
   {send?.map((item,index)=>{
    return(
      <>
      <h1>{item.firstName}</h1>
      <tr>
    <th scope="row">{index+1}</th>
    <td>{item}</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
      </>
    )
   })}
   
  </tbody>
</table>


    </div>
  )
}

export default Homepage
