import React from 'react';
import Pic2 from '../../Photo/Work1/pic2.png';
import Pic3 from '../../Photo/Work1/pic3.png';
import Pic4 from '../../Photo/Work1/pic4.png';
import Pic5 from '../../Photo/Work1/pic5.png';
import Pic6 from '../../Photo/Work1/pic6.png';
import Pic7 from '../../Photo/Work1/pic7.png';
import Pic8 from '../../Photo/Work1/pic8.png';
import Pic12 from '../../Photo/Work1/pic12.png';



// ANCHOR img  

const Slide = () => (

<div class="container my-5">

{/* <!--Section: Content--> */}
<section class="text-center dark-grey-text mb-5">
  
  <h3 class="font-weight-bold pb-5 text-center">Example Design <h5 className='mt-3 mb-0'>(Click left or right to see more)</h5></h3> 

  <div class="row">
    <div class="col-md-12">

      {/* <!--Carousel Wrapper--> */}
      <div id="carousel-example-1z" class="carousel slide" data-ride="carousel">
        {/* <!--Indicators--> */}
        <ol class="carousel-indicators">
          <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-1z" data-slide-to="1"></li>
          <li data-target="#carousel-example-1z" data-slide-to="2"></li>
          <li data-target="#carousel-example-1z" data-slide-to="3"></li>
          <li data-target="#carousel-example-1z" data-slide-to="4"></li>
          <li data-target="#carousel-example-1z" data-slide-to="5"></li>
          <li data-target="#carousel-example-1z" data-slide-to="6"></li>
          <li data-target="#carousel-example-1z" data-slide-to="7"></li>
          <li data-target="#carousel-example-1z" data-slide-to="8"></li>
          <li data-target="#carousel-example-1z" data-slide-to="9"></li>




        </ol>
        {/* <!--/.Indicators--> */}
        {/* <!--Slides--> */}
        <div class="carousel-inner" role="listbox">
          {/* <!--First slide--> */}
          <div class="carousel-item active">
            <img class="d-block w-100" src={Pic2}
              alt="First slide"/>
          </div>
          {/* <!--/First slide--> */}
          {/* <!--Second slide--> */}
          <div class="carousel-item">
            <img class="d-block w-100" src={Pic3}
              alt="Second slide"/>
          </div>
          {/* <!--/Second slide--> */}
          {/* <!--Third slide--> */}
          <div class="carousel-item">
            <img class="d-block w-100" src={Pic4}
              alt="Third slide"/>
          </div>

          <div class="carousel-item">
            <img class="d-block w-100" src={Pic5}
              alt="Third slide"/>
          </div>

          <div class="carousel-item">
            <img class="d-block w-100" src={Pic6}
              alt="Third slide"/>
          </div>

          <div class="carousel-item">
            <img class="d-block w-100" src={Pic7}
              alt="Third slide"/>
          </div>


          <div class="carousel-item">
            <img class="d-block w-100" src={Pic8}
              alt="Third slide"/>
          </div>

          <div class="carousel-item">
            <img class="d-block w-100" src={Pic12}
              alt="Third slide"/>
          </div>

          {/* <!--/Third slide--> */}
        </div>
        {/* <!--/.Slides--> */}
        {/* <!--Controls--> */}
        <a class="carousel-control-prev " href="#carousel-example-1z" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon " aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
        {/* <!--/.Controls--> */}
      </div>
      {/* <!--/.Carousel Wrapper--> */}

    </div>
  </div>

</section>
{/* <!--Section: Content--> */}


</div>


)

export default Slide;