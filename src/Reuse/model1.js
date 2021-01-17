import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import {Image} from 'cloudinary-react';
import Moment from 'react-moment'

const model1 = ({icon,sub_header,title,description,date,image,link , blog=false, imgId}) => {
    return (
        <Fragment>
        {/* <!-- Grid row --> */}
        <div className="row align-items-center">
           
           {/* <!-- Grid column --> */}
           <div className="col-lg-5">
 
             {/* <!-- Featured image --> */}
             <div className="view overlay rounded z-depth-2 mb-lg-0 mb-4">
               {blog ? <Image className="img-fluid"  cloudName="dsrdvi9rl" publicId={imgId}  crope="scale" />
               :   <img className="img-fluid" src={image} alt="Sample image"/>
                }
               <a>
                 <div className="mask rgba-white-slight"></div>
               </a>
             </div>
 
           </div>
           {/* <!-- Grid column --> */}
 
           {/* <!-- Grid column --> */}
           <div className="col-lg-7">
 
             {/* <!-- Category --> */}
             <div className="green-text">
               <h6 className="font-weight-bold mb-3"><i className={icon}></i>{sub_header}</h6>
             </div>
             {/* <!-- Post title --> */}
             <h4 className="font-weight-bold mb-3"><strong>{title}</strong></h4>
             {/* <!-- Excerpt --> */}
             <p>{description}</p>
             {/* <!-- Post data --> */}
             
             <p>by <a className='text-info'><strong>Tanawat Limsakul</strong></a>, 
                {blog? <Moment format='DD/MM/YYYY'>{date}</Moment> :
                  date
                }       
             </p>
             {/* <!-- Read more button --> */}
             {blog ? <a href={link}  className="btn btn-success btn-md btn-rounded mx-0">Read more</a>
             :  <Link to ={link}  className="btn btn-success btn-md btn-rounded mx-0">Read more</Link>
              }
            
           </div>
           {/* <!-- Grid column --> */}
 
         </div>
         {/* <!-- Grid row --> */}
 
 <hr className="my-5"/>
     </Fragment>
     
    )
}

export default model1
