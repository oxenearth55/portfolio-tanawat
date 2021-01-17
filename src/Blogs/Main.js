import React, { useEffect, useState, Fragment } from 'react';
import Layout from '../Layout'; 
import Cover from '../Reuse/Cover';
import CoverImg from '../Photo/blogs/cover-img.jpg'
import Model1 from '../Reuse/model1'
import { getBlogs } from '../API/blog'



const Main = () => {

    
  
    
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        init()
    },[])
    
    const init = async () =>{    
        const res = await getBlogs()
        setBlogs(res)
    }

    const typeIcon = (type) => {
        if(type === 'Food'){
            return 'fas fa-utensils fa-2x pr-2'
        }else if(type === 'Technology'){
            return 'fas fa-desktop pr-2 fa-2x '
        }else if (type === 'Travel'){
            return 'fas pr-2 fa-plane'

        }
    }
    
    const subHeader = (type) => (
        <Fragment>
            {
                type === 'Food' ? 'Food': 
                type === 'Technology' ? 'Technology': 
                'Travel'
            }
        </Fragment>
    )
        


    return(

    <Layout>
        <Cover img={CoverImg} description1='Blogs' description2='Powerd by React'/>
        <div className="container-fluid mt-5">
            <div className="col-12 text-center my-5">
           <h4>These blogs came from <a href="https://damp-dawn-44626.herokuapp.com/">MyBloggy</a> 
           (API) by using Cross-Origin Resource Sharing </h4>
           </div>
            { blogs.map(blog =>
            <Model1 icon={typeIcon(blog.type)} 
            sub_header={subHeader(blog.type)} 
            title={blog.topic} 
            // description={blog.content} 
            link={`https://damp-dawn-44626.herokuapp.com/blog/${blog._id}`} 
            date={blog.date}
            blog={true}
            imgId={blog.image}
            />
            ) }
         </div>

    </Layout>  




    )
}




export default Main;