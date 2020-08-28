import React from 'react';
import Menu from './Menu_Footer/Menu';
import Footer from './Menu_Footer/Footer';



const Layout = ({children,className}) => (

    <div className='container-fluid mx-0 px-0'>
        <Menu/>

        {children}

        <Footer/>

    </div>

)



export default Layout;