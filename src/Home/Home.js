import React from 'react';
import Layout from '../Layout';
//ANCHOR Components 
import Cover from '../Reuse/Cover';
import Info from './Info';
import Header1 from '../Reuse/Header';
import Skills from '../Reuse/Skills';
import Tools from './Tools';
import Education from './Education';

//ANCHOR Image 
import CoverImg from '../Photo/Cover-home.jpg'


const home = () => {

    const header_education = () => (
        <div className='bg-education fix-bg'>          
            <h1 className='text-center vertical-center header-text '>Education </h1> 
        </div>
)

    const header_MEARN = () => (
            <div className='bg-MERN fix-bg'>          
                <h1 className='text-center vertical-center header-text '>My Skills </h1> 
            </div>
    )

    const header_tools = () => (
            <div className='bg-tools fix-bg'>          
                <h1 className='text-center vertical-center header-text '>My Tools </h1> 
            </div>
    )

    

    return(
        <Layout>
            <Cover img={CoverImg} description1='Portfolio' description2='Powerd by React'/>
            <Header1 content1='About Me' icon='fas fa-heart red-text mx-1'/>
            <Info/>
            {header_education()}
            <Education/>
            {header_MEARN()}
            <Skills skill1='MongoDB' skill2='Express' skill3='React' skill4='NodeJs' 
            icon1='fa fa-database fa-2x yellow-text' icon2='fas fa-server fa-2x orange-text' icon3='fab fa-2x fa-react'
             icon4='fab fa-node fa-2x green-text' 
            description1='Web Developer' description2='MERN Stack'/>
            <Skills description2='Others' skill1='HTML5' skill2='JavaScript' skill3='Bootstrap' skill4='CSS'
            icon1='fab fa-html5 fa-2x 'icon2='fab fa-js-square fa-2x yellow-text' icon3='fab fa-bootstrap fa-2x purple-text'
            icon4='fab fa-css3-alt fa-2x red-text'
            />
            {header_tools()}

            <Tools  />

        </Layout>
    )

}

export default home;