import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
// ANCHOR image
import work1 from '../Photo/Work1/pic1.png';
import work2 from '../Photo/waipu/cover.jpg';
import myblog from '../Photo/myblog/intro.png';



import Model1 from '../Reuse/model1';
import Model2 from '../Reuse/model2';

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
  
     <Model1 image={work1} 
     icon='fas fa-shopping-bag pr-2 fa-2x blue-text'
     sub_header= 'E-commerce Website'
     title='Mahasawat E-commerce website (MERN stack)'
     description='I created an eCommerce website for my senior project that focused
     on driving shop owners in the Mahasawat community to use more channels 
     for making transactions and grow their businesses efficiently. Moreover, 
     this project is the beginning of a cooperative in the 
     Mahasawat community, and the projects objective is to encourage 
     them to be the strongest community like others.'
     link='/work/ecommerce'
     date='19/07/2019'
     />

    <Model2 image={myblog}
    icon='fas fa-blog pr-2 fa-2x orange-text'
    sub_header = 'Blog website'
    title ='MyBloggy website (MERN stack)'
    description ='I created a blog website for everyone who would like to share great things which are skills, knowledge, experiences, and imagination
    to this world.
    '
    link='/work/blog'
    date='02/12/2020 to Current'
    />



     <Model1 image={work2}
     icon='fas fa-utensils pr-2 fa-1x'
     sub_header='Restaurant'
     title='Design Waipu restaurant menu'
     description='I designed menu for Waipu restaurant in NewZealand by using Canva'
     link='/work/restaurant'
     date='13/05/2020'
     
     />


      
      
    </section>
    {/* <!--Section: Content--> */}
  
  
  </div>
)
}
export default Blogs;