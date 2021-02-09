import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';

//import CoffeeAndTea from './Pages/Login';
import Main from './Main'; 
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

/*---Scripts--------------------------*/

import {mq} from '../common/media_queries.js'

const Container = () => {
    return(
      <BrowserRouter>
        <ContainerStyled className = 'Container'>
          
           <Header/>
           <Nav/>
           <Main/>
           <Footer/>
         </ContainerStyled>
         </BrowserRouter>
    );
}
export default Container;

const ContainerStyled = styled.div`

background-color: pink;
@media ${mq.desktop} {
  background-color: maroon;

}

@media ${mq.tablet} {
  background-color: yellow;

}

@media ${mq.ultrawide} {
   background-color: purple;
} 
`


