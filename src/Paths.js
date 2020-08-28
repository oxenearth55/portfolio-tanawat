import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

//ANCHOR Components 
import Home from './Home/Home';
import Experiance from './Experiance/Main';
import Contact from './Contact/Main';
import Works from './Works/Works';
import Work1 from './Works/mahasawat/Main';
import Work2 from './Works/waipu/Main';
import Blogs from './Blogs/Main';



const Paths = () =>{
    return(
    
    <BrowserRouter>
        <Switch>
            <Route path="/"  exact component={Home}></Route>
            <Route path="/experiance"  exact component={Experiance}></Route>
            <Route path="/works"  exact component={Works}></Route>
            <Route path="/contact" exact component={Contact}></Route>
            <Route path="/work/ecommerce"  exact component={Work1}></Route>
            <Route path="/work/restaurant"  exact component={Work2}></Route>
            <Route path="/blogs"  exact component={Blogs}></Route>

   </Switch>  
    </BrowserRouter>       
    );
}

export default Paths;