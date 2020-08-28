import React from 'react';
import Layout from '../../Layout';
// ANCHOR Components
import Cover from '../../Reuse/Cover';
import Header1 from '../../Reuse/Header';

// ANCHOR image 
import coverImg from '../../Photo/waipu/cover2.jpg';
import img1 from '../../Photo/waipu/1.png';
import img2 from '../../Photo/waipu/2.png';
import img3 from '../../Photo/waipu/3.png';
import img4 from '../../Photo/waipu/4.png';
import img5 from '../../Photo/waipu/5.png';
import img6 from '../../Photo/waipu/6.png';
import img7 from '../../Photo/waipu/7.png';
import img8 from '../../Photo/waipu/8.png';
import img9 from '../../Photo/waipu/9.png';
import img10 from '../../Photo/waipu/10.png';
import img11 from '../../Photo/waipu/11.png';
// ANCHOR background 
import bg1 from '../../Photo/waipu/bg1.jpg';
import bg2 from '../../Photo/waipu/bg2.jpg';
import bg3 from '../../Photo/waipu/bg3.jpg';
import bg4 from '../../Photo/waipu/bg4.jpg';
import bg5 from '../../Photo/waipu/bg5.jpg';
import bg6 from '../../Photo/waipu/bg6.jpg';
import bg7 from '../../Photo/waipu/bg7.jpg';
import bg8 from '../../Photo/waipu/bg8.jpg';
import bg9 from '../../Photo/waipu/bg9.jpg';
import bg10 from '../../Photo/waipu/bg10.jpg';
import bg11 from '../../Photo/waipu/bg11.jpg';














const Main = () => {

    const imageLayout = (img,bg,fix) => (
    <div className={fix} style={{backgroundImage: "url(" + bg + ")"}}>
         <div className='container py-5'>
            <div className='row justify-content-center'>
                <div className='col-'>
                { <img src={img} className='waipu-img'/>}
                                   
                </div>
            </div>

        </div>
    </div>
       


    );


 return(
     <Layout>
        <Cover img={coverImg} description1='Waipu restaurant' description2='Using Canva'/>
        {imageLayout(img1,bg1)}
        {imageLayout(img2, bg2, 'fix-bg')}
        {imageLayout(img3,bg3)}
        {imageLayout(img4,bg4, 'fix-bg')}
        {imageLayout(img5, bg5)}
        {imageLayout(img6, bg6, 'fix-bg')}
        {imageLayout(img7, bg7)}
        {imageLayout(img8, bg8, 'fix-bg')}
        {imageLayout(img9, bg9)}
        {imageLayout(img11, bg10, 'fix-bg')}
        {imageLayout(img10, bg11)}


     </Layout>
 )   
}
export default Main;