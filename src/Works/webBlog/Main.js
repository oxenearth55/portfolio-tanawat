import React from 'react'
import Cover from '../../Reuse/Cover';
import Layout from '../../Layout';
import cover from '../../Photo/myblog/cover.jpg';
import Section1 from './Section1';
import Programming from './Programming';
import Architecture from './Architecture';
import Vdo from './Vdo';


const Main = () => {
    return (
        <Layout>
            <Cover img={cover} description1='MyBloggy website' description2='Using MERN Stack'/>
            <Vdo/>
            <div className="container mt-5">

            <h5>You can visit my website here: <a href="https://damp-dawn-44626.herokuapp.com/" className="">Click</a></h5>
            <h5>You can visit my Github repo here: <a href="https://github.com/oxenearth55/MyBloggy" className="">Click</a></h5>

            <Programming/>
            <Section1/>
            <Architecture/>


            </div>


            
        </Layout>
    )
}

export default Main
