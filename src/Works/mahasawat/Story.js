import React from 'react';

import Pic6 from '../../Photo/Work1/pic6.png';
import Pic_Story from '../../Photo/Work1/pic_story.png';
import Pic_Story2 from '../../Photo/Work1/pic_story2.png';




const Story = () => (

<div class="container my-5">


{/* <!-- Section: Block Content --> */}
<section class="dark-grey-text text-center">

  <h3 class="text-center font-weight-bold mb-4 pb-2">Product Story</h3>
  <p class="text-center text-muted w-responsive mx-auto mb-5">
Product story is the primary factor that can attract customers.

  </p>

  {/* <!-- First row --> */}
  <div class="row">

    {/* <!-- First column --> */}
    <div class="col-lg-4 col-md-12 mb-4">

      <div class="view overlay z-depth-1">
        <img src={Pic_Story} class="img-fluid" alt="Sample image"/>
        <div class="mask flex-center blue-gradient-rgba">
          <a class="btn btn-outline-white btn-rounded">gain their curiosity</a>
        </div>
      </div>
      <p class="text-uppercase text-center text-muted mt-4 mb-0">Start with a question</p>

    </div>
    {/* <!-- First column --> */}

    {/* <!-- Second column --> */}
    <div class="col-lg-4 col-md-6 mb-4">

      <div class="view overlay z-depth-1">
        <img src={Pic_Story2} class="img-fluid" alt="Sample image"/>
        <div class=" mask flex-center blue-gradient-rgba">
          <a class="btn btn-outline-white btn-rounded">Anwser the question</a>
        </div>
      </div>
      <p class="text-uppercase text-center text-muted mt-4 mb-0">Find anwser together</p>

    </div>
    {/* <!-- Second column --> */}

    {/* <!-- Third column --> */}
    <div class="col-lg-4 col-md-6 mb-4">

      <div class="view overlay z-depth-1">
        <img src={Pic6} class="img-fluid" alt="Sample image"/>
        <div class="mask flex-center blue-gradient-rgba">
          <a class="btn  btn-outline-white btn-rounded">Provide negative factors</a>
        </div>
      </div>
      <p class="text-uppercase text-center text-muted mt-4 mb-0">Provide facts why they should use our products</p>

    </div>
    {/* <!-- Third column --> */}

  </div>
  {/* <!-- First row --> */}

</section>
{/* <!-- Section: Block Content --> */}


</div>

)

export default Story;