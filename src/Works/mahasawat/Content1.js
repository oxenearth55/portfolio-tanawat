import React from 'react';
// ANCHOR img
import Pic1 from '../../Photo/Work1/pic1.png';
import Tools from '../../Photo/Work1/tools.png';
import UseCase from '../../Photo/Work1/usecase.png';
import MVC from '../../Photo/Work1/mvc.png';



const Content1 = () => (

    <div class="container mt-5">


   {/* <!--Section: Content--> */}
              <section class="text-justify">
              <blockquote class="blockquote bq-primary">
               <h2 class="font-weight-bold text-center mb-4 bq-title">Abstract</h2>       
                    <p>Mahasawat canal is a popular tourist attraction in Nakhon Pathom province, with many attractions and stores 
                        offering local products. To obtain these products, buyers need to travel to the site and purchase products 
                        directly from the stores. Traveling to Mahasawat can be inconvenient to several potential buyers, and many 
                        tourists may not be able to visit all the marketplaces in Mahasawat since these marketplaces are located 
                        relatively far from each other. Therefore, to help the locals increase their sales, it is necessary to enable 
                        easy access to these local products. This can be done through the development of an e-commerce platform for 
                        the Mahasawat marketplace. Besides, using an e-commerce platform can be difficult for many locals who have 
                        limited IT knowledge and skills. Thus, it is also crucial to consider this challenge when designing and 
                        implementing the e-commerce platform.
 </p>       
                    <p>The proposed web-based application using HTML, CSS, JavaScript, react (hook), express, NodeJs and mongoDB to develop 
                        a web application. The system consists of twelve main functions, which are login, search product,
                         manage bank account, manage purchase, manage cart, checkout process, manage inventory, manage order, 
                         manage product, manage profile, manage user account, and manage shipping.
</p>
</blockquote>
          <br/>
          <blockquote class="blockquote bq-danger">

<h2 class="font-weight-bold text-center my-4 bq-title">Objectives of the project</h2>
<h5>The objectives of the project include:</h5>
 <p className='note-danger'>
1. To develop an e-commerce platform for the Mahasawat community for their identity product sales.<br/>
2. To showcase Mahasawat’s local products through product storytelling.<br/>
3. To provide an alternative channel for customers to purchase products from the Mahasawat community.<br/>
 </p>
 </blockquote>
 <br/>

 <blockquote class="blockquote bq-warning">

 <h2 class="font-weight-bold text-center my-4 bq-title">Scope of the Project
</h2>
<h5>
The scope of the project includes the design and development of Mahasawat e-commerce website that features the following functions:

</h5>
<p className='note-warning'>
1. Functions enabling merchants to set up their online stores where they can sell their products,
 manage their orders and inventory, and learn the ways to improve their sales based on provided reports. <br/>
2. Functions facilitating customer purchases, which comprises product searching, 
shopping cart management, checkout process, and purchase management.<br/>
</p>
</blockquote>
<br/>

<blockquote class="blockquote bq-success">

<h2 class="font-weight-bold text-center my-4 bq-title">Expected Benefits</h2>

<h5>Benefits to Users</h5>
<p className='note-success'>1. Improve accessibility, i.e., sellers and buyers can conveniently access the online-store 24 hours. <br/> 
    2. Increase product sales and profits. <br/>
    3. Build seller credibility, which helps attract more customers and gains more customer awareness. <br/>
    4. Create consumer insights, e.g., identifying potential customers and popular products. It also creates opportunities to change the offline aspects of the business, e.g., branch opening times, promotions, and product ranges.
<br/>
    5. Encourage locals to learn and use modern technology.
 <br/>
</p>

<h5>Benefits to Developers</h5>
<p className='note-success'>
    1. Learn about website architecture and new website development frameworks. 
 <br/>
    2. Develop skills and knowledge of web programming using HTML, CSS, grid layout, JavaScript, GitHub, NPM, React, and Database, etc.
<br/>
    3. Learn to develop a real-world application. 
<br/>
    4. Develop skills and knowledge in the software development process, and the scrum process.
<br/> 
    5. Learn to work better as a team, and to efficiently communicate.
<br/>

</p>
</blockquote>



{/* NOTE Architecture  */}
                    <figure class="figure">
                      <img src={Tools} class="figure-img img-fluid z-depth-1"
                        alt="..."/>
                      <figcaption class="figure-caption">System Architecture Technology</figcaption>
                    </figure>
          
          
                    <p>This is the system architecture for technologies.
 I use nginx as the web server to deploy to cloud service in digital ocean.
Client can connect to our site communicating with https from cloudflare to digital ocean.
And we have external service from sendgrid using for sending emails.
</p>
          <hr/>

{/* NOTE UseCase */}
<figure class="figure">
                      <img src={UseCase} class="figure-img img-fluid z-depth-1"
                        alt="..."/>
                      <figcaption class="figure-caption">Use case diagram</figcaption>
                    </figure>
          
          
                    <p>This is the use case diagram which illustrates main function that 
                      users which are customer, vendor and admin can participate in the system.
                      </p>


                    <hr/>

                    {/* NOTE MVC */}
                    <figure class="figure">
                      <img src={MVC} class="figure-img img-fluid z-depth-1"
                        alt="..."/>
                      <figcaption class="figure-caption">MVC model</figcaption>
                    </figure>
          
          
                    <p className='bold'>I use MVC to handle the web structure of our code inside the project.</p>
              <p>
1. The View component is used for all the UI logic of the application (user interface) <br/>
2. Controllers act as an interface between Model and View components to process all the business logic and incoming requests, manipulate data using the Model 
component and interact with the Views to render the final output.<br/>
3.  The Model component corresponds to all the data-related logic that the user works with. <br/>

                      </p>

<hr/>
          
                  
              </section>
              {/* <!--Section: Content--> */}


  </div>



)

export default Content1; 