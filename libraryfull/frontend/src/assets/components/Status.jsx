import React, { useState } from 'react'
import { Footer } from './Footer'

export const Status = ({rs}) => {
  const[pd,setpd]=useState([])



  const[showPopup , setShowPopup]= useState(false);
  // const[text , settext]=useState([])
  function pop_data(item){
    // alert(item)
    console.log(`i am checking seat: ${rs[0].seat}`)

    const as= rs.filter((ite)=>ite.seat==item)
    console.log(`data shown :${as}`)

   
    setpd(as)
  
  }


  console.log(`pd:${pd}`)


const s1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]
  return (
    <div>



    <div className='md'>
      
      <div className="r1">
      {s1.map((item )=><button onClick={()=>{setShowPopup(true),pop_data(item)}}   style={{backgroundColor: rs.some((ite)=> ite.seat==item)? "#f13165" : "lightgreen"}}  >{item}</button>)}
      </div>
      </div>



      {/* {showPopup && (
         <div className="main-pop">

<div className="pop">
<button onClick={()=>setShowPopup(false)}> X</button>
{pd.map((item )=><>{item.name}{item.email}{item.seat} <>{item.sdate}</>
<>{item.ldate}</></>)}

</div>

      </div>)} */}



          {showPopup && (
         <div className="main-pop">

<div className="pop">
<button onClick={()=>setShowPopup(false)}> X</button>


<div className="pop-content">
  {pd.map((item )=><>
<h1>Name:  {item.name}</h1>
<h1>Phone: {item.email}</h1>
<h1> Seat:  {item.seat} </h1>
<div className="date-pop"><h1>{item.sdate}</h1> ----
<h1>{item.ldate}</h1></div>
</>)}
</div>

</div>

      </div>)}



<Footer/>


    </div>
  )
}
