import React, { useEffect, useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'

export const Login = () => {

// for log in = fetch the user data
  // const[name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate = useNavigate();
  useEffect(() => {
      const auth =localStorage.getItem("user");
      if(auth)
      {
        navigate("/")
      }
    });
  const handelLogin= async()=>{
      console.warn(email,password)
      let result= await fetch("http://localhost:5000/login", {
          method:"post",
          body:JSON.stringify({email,password}),
          headers:{ "content-type":"application/json"}
      })
      result=await result.json();
      console.warn(result)
      if(result.name){
          localStorage.setItem("user",JSON.stringify(result))
          navigate("/")


      }else{
          alert("please enter correct details")
        }
    }




  return (
    <>

<div className="sign-main">

<div className="sign-center">

  <center><h1>Log In</h1></center>
 <br />

{/* <div className='inp1'>Name: <input type="text" placeholder='Enter Name'    onChange={(e)=>setName(e.target.value)}/></div> */}
<div className="log-center">
  
<div className="inp1"> Email: <input type="email" placeholder='Enter Email'  onChange={(e)=>setEmail(e.target.value)}/></div>

<div className="inp1">Password: <input id='password' type="password" placeholder='Enter password'    onChange={(e)=>setPassword(e.target.value)}/></div>
</div>
<br />
<button  onClick={handelLogin}>login</button>

<div className="for"><Link to="/forget"><u>Forget Password ?</u></Link> 
<Link  to="/signup"><p >Sign up</p></Link></div>

</div>
</div>



    </>
  )
}

