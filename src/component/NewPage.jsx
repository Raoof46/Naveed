import React from 'react'

const NewPage = () => {
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [phone,setPhone]=useState('');
  const [address,setAddress]=useState('');
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(false);


  
function manageUser(){
  axios.post('https://674aab3971933a4e8853229d.mockapi.io/userDetail',{firstName,lastName,phone,email,password,address}).then((responce)=>{
    console.log(responce);
  }).catch((error)=>{
        setError(true)
  }).finally((loading)=>{
    setLoading(false)
  })
}
  return (
    <div style={{textAlign:"center"}}>
      <form>
  <div class="mb-3" >
    <div><h1>New User Page</h1></div>
    <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">firstName</label>
    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=> setFirstName(e.target.value)}value={firstName}/>
  </div>

    <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">lastName</label>
    <input type="password" class="form-control" id="exampleInputPassword1"onChange={(e)=> setLastName(e.target.value)}value={lastNametName}/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="password" class="form-control" id="exampleInputPassword1"onChange={(e)=> setEmail(e.target.value)}value={email}/>
  </div>
  
    <label for="exampleInputEmail1" class="form-label">Address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"onChange={(e)=> setAddress(e.target.value)}value={address}/>
  </div>
 
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"onChange={(e)=> setPassword(e.target.value)}value={password}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">PhoneNo</label>
    <input type="password" class="form-control" id="exampleInputPassword1"onChange={(e)=> setPhone(e.target.value)}value={phone}/>
  </div> 
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={manageUser}>Submit</button>
</form>
    </div>
  )
}

export default NewPage
