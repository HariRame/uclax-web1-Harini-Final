import React from 'react';
import {BrowserRouter} from 'react-router-dom';

//import CoffeeAndTea from './Pages/Login';
import Main from './Main'; 
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';


const Container = () => {
    return(
      <BrowserRouter>
        <div className = "Container">
           Container Content
           <Header/>
           <Nav/>
           <Main/>
           <Footer/>
         </div>
         </BrowserRouter>
    );
}
export default Container;
