import React from 'react'
import { Footer } from './Footer'
import { Link } from 'react-router-dom'
import ll from "./library.jpg"
export const Contact = () => {
  return (
    <div>
{/* <div className="cont-main">

<div className="cm1"></div>

</div> */}

<div className="contact-main">
<div className="cm1"><h1> Reach out and say hello </h1>
<p>Get in touch through any of the options provided below. We're eager to hear from you! </p></div>

<div className="cl1"><img id='ll1' src={ll} alt="" /></div>

</div>

<div className="contact-center"></div>
<div className="contact-footer">
<div className="cf1">

  <h2>Customer support</h2><br />
  <p>if you are unable to log into your account, please contact our support team. A ticket will be created and one of our support team members will assist you via email.</p><br />
 <Link to='/support'> <button>Contact support</button></Link>
  </div>



<div className="cf1">

<h2>Help center</h2>
<br />
<p>Navigate our help center articles for assistance on various playform and partnership topics. From quick Frequently Asked Question to  in depth guide, we have you covered. </p>
<br />
<Link to='/support'><button>visit our help center</button></Link></div>


</div>




      <Footer/>
    </div>
  )
}
