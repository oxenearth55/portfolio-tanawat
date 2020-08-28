import React from 'react';

const Header = ({content1,content2, icon}) =>(
    
    <div class="container my-5">

    {/* <!--Section: Content--> */}
    <section class="px-md-5 mx-md-5 py-5 text-center white-text elegant-color z-depth-1 rounded">

      <h3 class="">{content1} <i class={icon}></i> {content2}</h3>

    </section>
    {/* <!--Section: Content--> */}


  </div>


)

export default Header;