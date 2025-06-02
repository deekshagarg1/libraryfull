import React, { useState } from 'react'

export const Support = () => {
const [name, setname]=useState("")
const[email, setemail]=useState("")
const[com, setcom]=useState("")
const [arr, setArr]=useState([])

function submit(){
const ss=[...arr, {name, email, com}]
setArr(ss)
console.log(arr)
console.log("clicked")
}

  return (
    <div>
<div className="support-main">

<fieldset>
    <legend>Comment Here</legend>

<div className="support-center">
  <div className="inp1"> Name: <input type="text" placeholder='Enter your Name' onChange={(e)=>setname(e.target.value)}/></div>
<div className="inp1"> Email: <input type="text" placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)} /></div>

<div className="inp1">Comment: <textarea name="" id=""  onChange={(e)=>setcom(e.target.value)}></textarea></div>

<button onClick={submit}>Submit</button>
</div>
</fieldset>

</div>


    </div>
  )
}
