import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';

//import CoffeeAndTea from './Pages/Login';
import Main from './Main'; 
import Header from './Header.jsx';
import NavLarge from './Nav/NavLarge.jsx';
import NavMobile from './Nav/NavMobile.jsx';
import Footer from './Footer.jsx';

/*---Scripts--------------------------*/

import {mq} from '../common/media_queries.js';
import useMediaQuery from '../common/useMediaQuery.js';

const Container = () => {
   const { isSmall } = useMediaQuery();
    return(
      <BrowserRouter>
        <ContainerStyled className = 'Container'>
          
           <Header/>
           {
             isSmall 
             ? <NavMobile />
             : <NavLarge />
           }
           
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
  background-color: #c3cdd6;

}

@media ${mq.tablet} {
  background-color: #c3cdd6;

}

@media ${mq.ultrawide} {
   background-color: #c3cdd6;
} 
`


