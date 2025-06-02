import React, { useEffect, useRef, useState } from 'react'
// import './App.css'
import ss from './library.jpg'
import {Link, useNavigate} from 'react-router-dom'
export const Nav = () => {

const[menubar , setmenubar]=useState(false)

function togglemenu(){
  setmenubar(!menubar)
}

const auth=localStorage.getItem("user")
const navigate=useNavigate()

const logout =()=>{
  localStorage.clear();
  navigate("/sign")
}


const[sc, setScrol]=useState(false)

useEffect(()=>{
function x (){
if(window.scrollY>500){
setScrol(true)
}
else {
  setScrol(false )
}
}
window.addEventListener("scroll", x)
return()=>(window.removeEventListener("scroll", x))

},[])



// const[menu, setmenu]=useState(false)

  return (
    <>
<div className="nav-bar" style={{backgroundColor: sc? "#a887ae":""}}>

<div className="nav-logo"><img src={ss} alt="" /></div>


{auth? <><div className="nav-left ">
 <Link to="/"><p>Home</p></Link>
<Link to="/seat">  <p>Seat Booking</p></Link>
<Link to="/status">  <p>Check Seat status</p></Link>
<Link to="/contact">  <p>Contact Us</p></Link>
<Link onClick={logout} to='/sign'> <p><p>LogOut</p></p></Link></div>

<div className="nav-left1">
  <input  id="inp1" type="text"  placeholder="Enter Book Name"/>
  <button id="btn1"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></button></div>

<button id="btn2"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></button>


{/* onMouseOver to show the hover effect in react */}

{/* <div className="nav-dot" onMouseOver={togglemenu}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
class="bi-bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg></div> */}

<div className="nav-dot" onClick={togglemenu}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
class="bi-bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg></div></>:<>

<div className="private1"></div>
<div className="nav-right">
 <Link to='/sign'> <p>signUp</p></Link>

<Link to='/login'>  <p> logIn</p></Link>
</div></>}
</div>





 <div className={`dot-list ${menubar ? "active" : ""}`}>
 <Link to="/"><p>Home</p></Link><hr />
<Link to="/seat">  <p>Seat Booking</p></Link><hr />
<Link to="/status">  <p>Check Seat status</p></Link><hr />
<Link to="/contact">  <p>Contact Us</p></Link><hr />
<Link onClick={logout} to='/sign'> <p><p>LogOut</p></p></Link></div>




    </>
  )
}
