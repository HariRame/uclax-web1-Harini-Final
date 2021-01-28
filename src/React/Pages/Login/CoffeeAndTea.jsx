import React, {useState} from 'react';
import styled from 'styled-components';

const CoffeeAndTea = () => {

    const [imgSrc, imgSrcUpdate] = useState('/assets/img/coffee1.jpg');

    const imageOver = () => {imgSrcUpdate('assets/img/tea1.jpg')};

    const imageOut = () => {imgSrcUpdate('assets/img/coffee1.jpg')}

    return (
        <CoffeeAndTeaStyled className='CoffeeAndTea'>
            <h2>Coffee And Tea</h2>
            <img src = {imgSrc} alt = "CoffeeOrTea"
                 onMouseOver= {imageOver}
                 onMouseOut= {imageOut}  
            />
        </CoffeeAndTeaStyled>
    );
}

export default CoffeeAndTea;

const CoffeeAndTeaStyled = styled.div`
    
`;