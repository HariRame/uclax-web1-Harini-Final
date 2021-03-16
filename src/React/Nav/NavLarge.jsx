import React from 'react';
import styled from 'styled-components';

/*Components--------------------*/
import Nav from './Nav.jsx'

const NavLarge = () => {

    return (
        <NavLargeStyled className='NavLarge'>
             
            <Nav />
        </NavLargeStyled>
    );
}

export default NavLarge;

const NavLargeStyled = styled.div`
display: flex;
justify-content: center;
background-color: #e25555;
padding:20px;

.Nav {
    display: flex;
    width: 500px;
    //outline: solid 2px white;

    
}
a {
    flex: 1;
    text-align: center;
    background: #d68787;
    color: Black;
    text-decoration: none;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;

    &.active {
        background-color: #9c1a1a;
        color: white;
    }

}
    
`;