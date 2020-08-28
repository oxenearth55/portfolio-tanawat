import React from 'react';
import img from '../Photo/Experience/Nectec.jpg'

const Nectec = () => (
    <>
    <div class="container mt-5">


{/* <!--Section: Content--> */}
<section class="dark-grey-text">

  {/* <!-- Section heading --> */}
  <h2 class="text-center font-weight-bold mb-4 pb-2">NECTEC</h2>
  {/* <!-- Section description --> */}
  <p class="text-center mx-auto w-responsive mb-5">
  Thailand's National Electronics and Computer Technology Center (NECTEC) is a statutory government organization 
  under the National Science and Technology Development Agency (NSTDA), Ministry of Higher Education, Science,
   Research and Innovation. Its main responsibilities are to undertake, support, and promote the development of 
   electronic, computing, telecommunication, and information technologies through research and development activities.
    NECTEC also disseminates and transfers such technologies for contribution to the economic growth and social development
   in the country, following the National Economic and Social Development Plan.[1]
  </p>
  {/* <!-- Grid row --> */}
  <div class="row align-items-center">

    {/* <!-- Grid column --> */}
    <div class="col-lg-5">

      {/* <!-- Featured image --> */}
      <div class="view overlay rounded z-depth-2 mb-lg-0 mb-4">
        <img class="img-fluid" src={img} alt="Sample image"/>
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>

    </div>
    {/* <!-- Grid column --> */}

    {/* <!-- Grid column --> */}
    <div class="col-lg-7">

      {/* <!-- Category --> */}
      <a href="#!" class="green-text">
        <h6 class="font-weight-bold mb-3"><i class="fas fa-utensils pr-2"></i>Internship</h6>
      </a>
      {/* <!-- Post title --> */}
      <h4 class="font-weight-bold mb-3"><strong>LAI (Determine location and Network) </strong></h4>
      {/* <!-- Excerpt --> */}
      <p>1. Implemented Thigboard by using MQTT, NodeJs, and JavaScript to detect the position of each anchor and people in the NECTEC building on each floor.
and also implemented the dashboard to illustrate temperature and humidIdentify.<br/>
2. Used MokoBeacon and BeaconSet+ to set UUID, Major, Minor, and broadcast interval of tag beacon.<br/>
3. Upgraded firmware for TECB.</p>
      {/* <!-- Post data --> */}
      <p><a><strong>Duration: </strong></a> <div className='orange-text'>Jun to Aug 2019</div> </p>
      {/* <!-- Read more button --> */}
      {/* <a class="btn btn-success btn-md btn-rounded mx-0">Read more</a> */}

    </div>
    {/* <!-- Grid column --> */}

  </div>
  {/* <!-- Grid row --> */}

  <hr class="my-5"/>
  
</section>
{/* <!--Section: Content--> */}


</div>
    </>
);

export default Nectec; 