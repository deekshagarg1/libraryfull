import React, { useState } from 'react'

export const Seat = ({res, rs }) => {


  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[seat,setSeat]=useState("")
const[sdate, setsDate]=useState("")
const[ldate, setlDate]=useState("")



  return (<>
    
    <div className="sign-main">
<div className="sign-center">
 <center><h1>Book your seat here!</h1></center><br />
{/* <center><h1>Sign up</h1></center> */}
<div className='inp1'>Name : <input type="text" placeholder='Enter Your Name'    onChange={(e)=>setName(e.target.value)}/></div>

<div className="inp1"> Mob No. : <input type="text" placeholder='Enter Your Mobile Number' onChange={(e)=>setEmail(e.target.value)}/></div>

<div className="sign-date">
<div className="inp2">Seat : <input id='pw' type="number" placeholder='Enter seat number'   onChange={(e)=>setSeat(e.target.value)}/></div>

</div>

<div className="sign-time">
 Date: <div className="inp3"><div className="from">
  from: <input id='pw1' type="date"  onChange={(e)=>setsDate(e.target.value)} /> </div><div className="to"> To: <input id='pw1' type="date"  onChange={(e)=>setlDate(e.target.value)} />
</div>
</div>
</div>

<button onClick={()=>{res(name,email,seat,ldate,sdate)}} >Register</button>

</div>



<div className="mess">
  {rs.map((item)=><table><tr><td> Name: {item.name}   </td><br /><td>mob: {item.email}   </td><br /><td>seat: {item.seat}   </td><br /><td>from: {item.sdate}   </td><br /><td>to: {item.ldate}   </td></tr></table>)}
</div>


</div>
  </>
  )
}
