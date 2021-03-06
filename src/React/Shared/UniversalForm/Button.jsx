import React from 'react';
import styled from 'styled-components';

const Button = ({children, type}) => {

    return (
        <ButtonStyled className='Button'
            className='Button'
            type = {type} >
            {children} 
        </ButtonStyled>
    );
}

export default Button;

const ButtonStyled = styled.button`
    background-color: white;
    padding: 10px 20px;
    font-size: 18px;
    margin-top: 10px;
    border: solid 1px black;
    border-radius: 5px;
`;