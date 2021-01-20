import React from 'react';
import CoffeeAndTea from './CoffeeAndTea';
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

const Container = () => {
    return(
        <div className = "Container">
           Container Content
           <Header/>
           <Nav/>
           <CoffeeAndTea/>
           <Footer/>
         </div>
    );
}
export default Container;
