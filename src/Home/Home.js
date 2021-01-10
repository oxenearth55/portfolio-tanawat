import React from 'react';
import Layout from '../Layout';
//ANCHOR Components 
import Cover from '../Reuse/Cover';
import Info from './Info';
import Header1 from '../Reuse/Header';
import Skills from '../Reuse/Skills';
import Tools from './Tools';
import Education from './Education';

// ANCHOR Details 
import { skill_MERN, skill_others } from '../Detail/skills';
import { tools } from '../Detail/tools';

//ANCHOR Image 
import CoverImg from '../Photo/Cover-home.jpg'


const Home = () => {

    

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
            <Skills skills={skill_MERN} header='MERN STACK' subHeader='Full-stack developer' />
            <Skills skills={skill_others} header='Other skills' subHeader='web developer' />
            {header_tools()}
            <Tools tools={tools}  />

        </Layout>
    )

}

export default Home;