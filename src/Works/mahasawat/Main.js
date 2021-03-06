import React from 'react';
import Layout from '../../Layout';
// ANCHOR Components
import Cover from '../../Reuse/Cover';
import Content1 from './Content1';
import Slide from './Slide';
import Story from './Story';
import Vdo from './Vdo';

// ANCHOR image 
import cover_work1 from '../../Photo/Work1/work1-cover.jpg';

const Main = () => {

 return(
     <Layout>
         <Cover img={cover_work1} description1='Mahasawat E-commerce' description2='Using MERN Stack'/>
         <Vdo/>
         <h5 className="mt-4">You can visit my Github repo here: <a href="https://github.com/oxenearth55/Mahasawat-Project" className="">Click</a></h5>

         <Content1/>
         <Story/>
         <Slide/>

     </Layout>
 )   
}
export default Main;