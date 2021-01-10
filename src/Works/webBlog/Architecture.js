import React from 'react'
import usecase from '../../Photo/myblog/usecase.png';
import decomposition from '../../Photo/myblog/func.png';

 

const Architecture = () => {
    return (
        <div>
            {/* NOTE UseCase */}
                    <figure className="figure">
                      <img src={usecase} class="figure-img img-fluid z-depth-1"
                        alt="..."/>
                      <figcaption class="figure-caption">Use case diagram</figcaption>
                    </figure>
          
                    <p>This is the use case diagram which illustrates main functions that 
                      users and writer can participate in the system.
                      </p>
                    <hr/>

                    {/* NOTE Functional decomposition */}
                    <figure className="figure">
                      <img src={decomposition} class="figure-img img-fluid z-depth-1"
                        alt="..."/>
                      <figcaption class="figure-caption">Functional decomposition</figcaption>
                    </figure>
          
                    <p>This is the functional decomposition which illustrates overall functions inside the system.
                      </p>
                    <hr/>


            
        </div>
    )
}

export default Architecture
