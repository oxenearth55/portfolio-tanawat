import React from 'react';
import Layout from '../Layout';
// ANCHOR Components 
import Cover from '../Reuse/Cover';
import Blogs from './Blogs';

//ANCHOR Image 
import Cover_works from '../Photo/Cover-works.jpg'

const Works = () => {

return(
<Layout>
<Cover img={Cover_works} description1='Works' description2='can make me stronger'/>
<Blogs/>
</Layout>
)
    

}

export default Works;