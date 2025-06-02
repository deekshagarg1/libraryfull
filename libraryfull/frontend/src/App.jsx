import React, { useEffect, useState } from 'react'
import './App.css'
import '/src/assets/App2.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Nav } from './assets/components/Nav'
import { Home } from './assets/components/Home'
import { Contact } from './assets/components/Contact'
import { Seat } from './assets/components/Seat'
import { Status } from './assets/components/Status'
import { Sign } from './assets/components/Sign'
import { Login } from './assets/components/login'
import PrivateComponent from './assets/components/Private'
import { Forget } from './assets/components/Forget'
import { Support } from './assets/components/Support'
function App(){
  // const [msg, setmsg]=useState([])
  const [rs, setrs]=useState([])
  const[pd,setpd]=useState([])
  
  const res =(name,email,seat,ldate,sdate)=>{
const x=rs.filter((item)=>item.seat==seat)

if(seat>60 || seat<1){
  alert("Invalid seat number")
}
else if(x.length>0){
  alert("This seat is already reserved")
}

else{
  console.log("clicked")
  const newarr=[...rs, {name, email, seat, sdate, ldate}]
  setrs(newarr)
  alert("your seat is reserved")
  localStorage.setItem("reg", JSON.stringify(newarr))
}
// console.log("clicked")
// const newarr=[...msg, {name, email, seat, sdate, ldate}]
// setmsg(newarr)
// localStorage.setItem("reg", JSON.stringify(newarr))
  }




// -----------------------------------------------


useEffect(()=>{
const data=JSON.parse(localStorage.getItem("reg"))
if(data){
  setrs(data)
}
},[])






  return(
<>

<BrowserRouter>
<Nav/>
<Routes>
  <Route element={<PrivateComponent/>}> 
<Route path='/' element={<Home/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/seat' element={<Seat   res={res}  rs={rs}/>}/>
<Route path='/status' element={<Status rs={rs} />}/>
</Route>
<Route path='/sign' element={<Sign/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/forget' element={<Forget/>}/>
<Route path='/support' element={<Support/>} />
</Routes>
</BrowserRouter>



</>


  )
}
export default App
