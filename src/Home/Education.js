import React from 'react';
 import Mahidol from '../Photo/education-mahidol.jpeg'

const Education = () => (

    <div class="container my-4 py-5">


  {/* <!--Section: Content--> */}
  <section class="">

  	{/* <!-- Grid row --> */}
    <div class="row">

      {/* <!-- Grid column --> */}
      <div class="col-lg-5 col-md-12 mb-lg-0 mb-4">

				{/* <!-- Featured image --> */}
        <div class="view overlay rounded z-depth-1 mb-lg-0 mb-4">
          <img class="img-fluid" src={Mahidol} alt="Sample image"/>
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>

      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div class="col-lg-7 col-md-6 mb-md-0 mb-4 mt-xl-4">

      	 <h3 class="font-weight-normal mb-4">Mahidol University (Bachelor degree)</h3>
         <p class="text-muted">
            I was student at Mahidol University which is 1st ranking in Thailand in faculty of Information and Communication Technology (English program) from 2016 to 2020. 
            My major was software engineering. I accquired a number of valuable knowladge related to programming subject and also 
            learnt crucial skills such as publick speaking and Academic writing. I completed many projects as a Mahidol student, for example, 
            web programming, Database management and etc. 
            

         </p>
         <a class="btn btn-outline-primary mx-0" href="https://www.ict.mahidol.ac.th/en/">Visit my faculty <i class="fas fa-arrow-right fs-9 ml-2"></i></a>

      </div>
      {/* <!-- Grid column --> */}

    </div>
    {/* <!-- Grid row --> */}

  </section>
  {/* <!--Section: Content--> */}


</div>



)

export default Education;