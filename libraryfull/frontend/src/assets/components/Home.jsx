import React from 'react'
import { Link, Navigate } from 'react-router-dom'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import aa from '/src/assets/components/bhagvad.jpg'
import bb from "/src/assets/components/wheretheprincesses.jpg"
import kk from "/src/assets/components/stephen king.jpg"
import cc from '/src/assets/components/deepwork.jpg'
import dd from '/src/assets/components/13435889._UX160_.jpg'
import ee from '/src/assets/components/BurntOfferings1.jpg' 
import ff from '/src/assets/components/entrepreneur.jpg'
import gg from '/src/assets/components/frogandtoad.jpg'
import hh from '/src/assets/components/hector-and-the-search-for-happiness-3.jpg'
import ii from '/src/assets/components/ikigai.jpg'
import { Footer } from './Footer';

export const Home = () => {

  const logout=()=>{
    localStorage.clear();
    Navigate("/sign")
  }

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };


  return (
    <>

<div className="home-main">
  {/* ----------------------------------- */}
<div className="home-main1">



  <br /><br /><br /><br /><br />
  <h1>Welcome To Our LIBRARY !!!</h1>
  <br />
  <center>10 Million people trusted us and get a free access of our interested books.</center><br />
  <br />
  <button> <Link to='/sign'> <p>signUp For Free</p></Link></button><br />
  
 <h2> OR</h2> <br />
<button id='seat1'><Link to="/seat"> <p>Book Your Seat</p></Link></button><br /><br /><br />
</div><br />
{/* -------------------------------------- */}
<section className='slider1'>
  <div className="slider2">
<center>Books Might You Like</center><br /><br /><br />
<div className="slider3">
{/* ................................ */}

<div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3><><img id='c12' src={bb} alt="" /></></h3>
        </div>
        <div>
          <h3><><img id='c12' src={ee} alt="" /></></h3>
        </div>
        <div>
          <h3><><img id='c12' src={kk} alt="" /></></h3>
        </div>
        <div>
          <h3><><img id='c12' src= {ii} alt="" /></></h3>
        </div>
        <div>
          <h3><><img id='c12' src={hh} alt="" /></></h3>
        </div>
        <div>
          <h3><><img id='c12' src={ff} alt="" /></></h3>
        </div>
      </Slider>
    </div>
{/* ------------ */}

</div>


{/* -------------------------media-slider--------------- */}
{/* <div className="slider4">
................................
<div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3><><img id='c12' src={bb} alt="" /></></h3>
        </div>
        <div>
          <h3><><img id='c12' src={ee} alt="" /></></h3>
        </div>
        <div>
          <h3><><img id='c12' src={kk} alt="" /></></h3>
        </div>
        <div>
          <h3><><img id='c12' src= {ii} alt="" /></></h3>
        </div>
        <div>
          <h3><><img id='c12' src={hh} alt="" /></></h3>
        </div>
        <div>
          <h3><><img id='c12' src={ff} alt="" /></></h3>
        </div>
      </Slider>
    </div> 
------------

</div> */}








{/* -------------------------------- */}
  </div>


</section>



{/* ----------------------------------------------- */}
<section className='home-center'>
  <div className="home-center1">
    <h1>Most Searched Books !</h1><br /><br />
    <div className="center2">
<div className="c1">
<img id='c11' src={aa} alt="" /></div>
<div className="c1"><img id='c11' src={bb} alt="" /></div>
<div className="c1"><img id='c11' src={kk} alt="" /></div>
<div className="c1"><img id='c11' src={cc} alt="" /></div>
<div className="c1"><img id='c11' src= {dd} alt="" /></div>
</div>

<div className="center2">

<div className="c1"><img id='c11' src={ff} alt="" /></div>
<div className="c1"><img id='c11' src={gg} alt="" /></div>
<div className="c1"><img id='c11' src={hh} alt="" /></div>
<div className="c1"><img id='c11' src= {ii} alt="" /></div>
<div className="c1"><img id='c11' src={ee} alt="" /></div></div>

  </div>
</section>






{/* .................................end.................. */}
<Footer/>
</div>

    </>
  )
}
