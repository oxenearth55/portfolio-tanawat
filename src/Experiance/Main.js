import React from 'react';
import Layout from '../Layout';
import Cover from '../Reuse/Cover';
import CoverImg from '../Photo/Cover-exp.jpg'
import Nectec from './Nectec';


const Experiance = () => (
    <Layout>
            <Cover img={CoverImg} description1='Experiences' description2='better opportunity'/>
            <Nectec/>

    </Layout>

)

export default Experiance; 