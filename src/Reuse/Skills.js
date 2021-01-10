import React, { Fragment } from 'react';


const Skills = ({skills, header, subHeader}) => (
    <div class="container my-5">


  {/* <!--Section: Content--> */}
  <section class="dark-grey-text text-center">

    <h6 class="font-weight-normal text-uppercase font-small grey-text mb-4">{subHeader}</h6>
    {/* <!-- Section heading --> */}
<h3 class="font-weight-bold black-text mb-4 pb-2">{header}</h3>
    <hr class="w-header"/>
    {/* <!-- Section description --> */}

    {/* <!--First row--> */}
    <div class="row">
      {skills.map(skill => 
      <Fragment> 
         {/* <!--Grid column--> */}
      <div class="col-md-3 mb-4">
        {/* <!-- Card --> */}
        <a href="#!" class="card hoverable">
          {/* <!-- Card content --> */}
          <div class="card-body my-4">
          	<p><i class={skill.icon}></i></p>
            <h5 class="black-text mb-0">{skill.skill}</h5>        
          </div>
        </a>
        {/* <!-- Card --> */}

      </div>
      {/* <!--Grid column--> */}

      </Fragment>
        )}
     
    </div>
    {/* <!--First row--> */}
	</section>
  
  
</div>



)

export default Skills;