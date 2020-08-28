import React from 'react';
import MyPic from '../Photo/MyPic.jpg'


const Info = () => (

<div className='mb-4 '>
<div class="container z-depth-1 py-5 my-5  ">
  <section class="mx-md-5 text-center text-lg-left">
    <div class="row d-flex justify-content-center">
      <div class="col-md-12">
        <div class="row p-5">
          <div class="col-lg-8 d-flex flex-column justify-content-between">
            <p class="text-muted mb-4">I'm software engineering who have experiences in ICT fields.  
            and my goal is to be the full-stack web developer. 
            Preparing for the future, strong responsibility and confidence, higher development knowledge, and acquire 
            more experiences is a definition of my life. I always strive to achieve the most top result at any given task
             in any situation without discouragement. Strong relationship and teamwork skill is the best thing to describe 
             my personal profile. Moreover, I always have an excellent motivation to deal with every unexpected problem 
             that will happen in my life.  
            </p>
            <div>
              <p class="font-weight-bold lead mb-2"><strong>Tanawat Limsakul</strong></p>
              <p class="font-weight-bold text-muted">Software Engineering</p>
            </div>
          </div>
          <div class="col-lg-4 d-flex mb-2 align-items-center">
              <div class="avatar mx-4 w-100 white d-flex justify-content-center align-items-center">
                <img src={MyPic} class="rounded-circle img-fluid z-depth-1" alt="woman avatar"/>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</div>
</div>

)

export default Info;