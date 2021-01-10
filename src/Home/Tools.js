import React from 'react';


const Tools = ({tools}) => (
    <div className="container pt-5 my-5 z-depth-1">
  <section className="p-md-3 mx-md-5">
    <div className="row">
      {tools.map(tool => 
        <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="font-weight-bold mb-3">
              <i className={tool.icon}></i>{tool.title}
            </h4>
            <p className="text-muted">
              {tool.description}
            </p>
        </div>
      )}
     
    </div>
  </section>
</div>


)


export default Tools; 