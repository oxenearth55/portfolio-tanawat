import React from 'react'
import Skills from '../../Reuse/Skills';
import { mybloggy_mern,mybloggy_skills } from '../../Detail/myBloggy';

const Programming = () => {
    return (
        <div>
            <Skills skills={mybloggy_mern} header='MERN STACK' subHeader='Progrmming skills for this project' />
            <Skills skills={mybloggy_skills} />        
        </div>
    )
}

export default Programming
