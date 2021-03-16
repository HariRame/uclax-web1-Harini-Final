import React from 'react';
import styled from 'styled-components';

const Slide = ({slide}) => {

    return (
        <SlideStyled className='Slide'>
            <img src = {slide.image} alt = {slide.title} /> 
            {/* <p className = 'legend'> {slide.title} </p>  */}
        </SlideStyled>
    );
}

export default Slide;

const SlideStyled = styled.div`
    align-content: center;
    img {
        max-height: 500px;
    }
    .Carousel .slide .legend {
        
        background-color: teal;
        opacity: 1;
        
    }
    
`;