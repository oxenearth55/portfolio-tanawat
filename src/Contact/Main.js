import React from 'react';
import Layout from '../Layout'; 
import Cover from '../Reuse/Cover';
import CoverImg from '../Photo/blogs/cover-img.jpg'


const Main = () => (

    <Layout>
        
        <Cover img={CoverImg} description1='Blogs' description2='Powerd by React'/>

    </Layout>


); 

export default Main;