import React from 'react';
import { Link } from 'react-router-dom';
// ANCHOR image
import work1 from '../Photo/Work1/pic1.png';
import work2 from '../Photo/waipu/cover.jpg';

const Blogs = () => {

 
return(
  
    <div className="container mt-5">
    {/* <!--Section: Content--> */}
    <section className="dark-grey-text">
  
      {/* <!-- Section heading --> */}
      <h2 className="text-center font-weight-bold mb-4 pb-2">My works</h2>
      {/* <!-- Section description --> */}
      <h5 className="text-center mx-auto w-responsive mb-5">
          The only way to do great work is to love what you do.
        </h5>
  
      {/* <!-- Grid row --> */}
      <div className="row align-items-center">
  
        {/* <!-- Grid column --> */}
        <div className="col-lg-5">
  
          {/* <!-- Featured image --> */}
          <div className="view overlay rounded z-depth-2 mb-lg-0 mb-4">
            <img className="img-fluid" src={work1} alt="Sample image"/>
            <a>
              <div className="mask rgba-white-slight"></div>
            </a>
          </div>
  
        </div>
        {/* <!-- Grid column --> */}
  
        {/* <!-- Grid column --> */}
        <div className="col-lg-7">
  
          {/* <!-- Category --> */}
          <div className="green-text">
            <h6 className="font-weight-bold mb-3"><i className="fab fa-react pr-2 fa-2x blue-text"></i>Website</h6>
          </div>
          {/* <!-- Post title --> */}
          <h4 className="font-weight-bold mb-3"><strong>Mahasawat E-commerce website (MERN stack)</strong></h4>
          {/* <!-- Excerpt --> */}
          <p>I created an eCommerce website for my senior project that focused
               on driving shop owners in the Mahasawat community to use more channels 
               for making transactions and grow their businesses efficiently. Moreover, this project is the beginning of a cooperative in the Mahasawat community, and the project's objective is to encourage them to be the strongest community like others.</p>
          {/* <!-- Post data --> */}
          <p>by <a className='text-info'><strong>Tanawat Limsakul</strong></a>, 19/07/2019</p>
          {/* <!-- Read more button --> */}
          <Link to ='/work/ecommerce'  className="btn btn-success btn-md btn-rounded mx-0">Read more</Link>
  
        </div>
        {/* <!-- Grid column --> */}
  
      </div>
      {/* <!-- Grid row --> */}
  
      <hr className="my-5"/>


       {/* <!-- Grid row --> */}
       <div className="row align-items-center">
  
  

  {/* <!-- Grid column --> */}
  <div className="col-lg-7">

    {/* <!-- Category --> */}
    <div className="pink-text">
      <h6 className="font-weight-bold mb-3"><i className="fas fa-utensils pr-2 fa-1x"></i>Restaurant</h6>
    </div>
    {/* <!-- Post title --> */}
    <h4 className="font-weight-bold mb-3"><strong>Design Waipu restaurant menu </strong></h4>
    {/* <!-- Excerpt --> */}
    <p>I designed menu for Waipu restaurant in NewZealand by using Canva</p>
    {/* <!-- Post data --> */}
    <p>by <a className='text-info'><strong >Tanawat Limsakul</strong></a>, 13/05/2020</p>
    {/* <!-- Read more button --> */}
    <Link to='/work/restaurant' className="btn btn-pink btn-md btn-rounded mx-0">Read more</Link>

  </div>
  {/* <!-- Grid column --> */}

  {/* <!-- Grid column --> */}
  <div className="col-lg-5">

    {/* <!-- Featured image --> */}
    <div className="view overlay rounded z-depth-2 mb-lg-0 mb-4">
      <img className="img-fluid" src={work2} alt="Sample image"/>
      <a>
        <div className="mask rgba-white-slight"></div>
      </a>    
    </div>
  </div>
  {/* <!-- Grid column --> */}

</div>
{/* <!-- Grid row --> */}

<hr className="my-5"/>
      
    </section>
    {/* <!--Section: Content--> */}
  
  
  </div>
)
}
export default Blogs;