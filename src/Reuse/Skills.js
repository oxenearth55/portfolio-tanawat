import React from 'react';


const Skills = ({skill1,skill2,skill3,skill4,icon1,icon2,icon3,icon4,description1,description2}) => (
    <div class="container my-5">


  {/* <!--Section: Content--> */}
  <section class="dark-grey-text text-center">

    <h6 class="font-weight-normal text-uppercase font-small grey-text mb-4"> {description1}</h6>
    {/* <!-- Section heading --> */}
<h3 class="font-weight-bold black-text mb-4 pb-2">{description2}</h3>
    <hr class="w-header"/>
    {/* <!-- Section description --> */}
    {/* <p class="lead text-muted mx-auto mt-4 pt-2 mb-5">As a web developer</p> */}

    {/* <!--First row--> */}
    <div class="row">

      {/* <!--Grid column--> */}
      <div class="col-md-3 mb-4">

        {/* <!-- Card --> */}
        <a href="#!" class="card hoverable">
          
          {/* <!-- Card content --> */}
          <div class="card-body my-4">

          	<p><i class={icon1}></i></p>
            <h5 class="black-text mb-0">{skill1}</h5>
            
          </div>

        </a>
        {/* <!-- Card --> */}

      </div>
      {/* <!--Grid column--> */}

      {/* <!--Grid column--> */}
      <div class="col-md-3 mb-4">

        {/* <!-- Card --> */}
        <a href="#!" class="card hoverable">
          
          {/* <!-- Card content --> */}
          <div class="card-body my-4">

          	<p><i class={icon2}></i></p>
            <h5 class="black-text mb-0">{skill2}</h5>
            
          </div>

        </a>
        {/* <!-- Card --> */}

      </div>
      {/* <!--Grid column--> */}
      
      {/* <!--Grid column--> */}
      <div class="col-md-3 mb-4">

        {/* <!-- Card --> */}
        <a href="#!" class="card hoverable">
          
          {/* <!-- Card content --> */}
          <div class="card-body my-4">

          	<p><i class={icon3}></i></p>
            <h5 class="black-text mb-0">{skill3}</h5>
            
          </div>

        </a>
        {/* <!-- Card --> */}

      </div>
      {/* <!--Grid column--> */}
      
      {/* <!--Grid column--> */}
      <div class="col-md-3 mb-4">

        {/* <!-- Card --> */}
        <a href="#!" class="card hoverable">
          
          {/* <!-- Card content --> */}
          <div class="card-body my-4">

          	<p><i class={icon4}></i></p>
            <h5 class="black-text mb-0">{skill4}</h5>
            
          </div>

        </a>
        {/* <!-- Card --> */}

      </div>
      {/* <!--Grid column--> */}

    </div>
    {/* <!--First row--> */}

	</section>
  
  
</div>



)

export default Skills;