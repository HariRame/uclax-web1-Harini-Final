import React, {useState} from 'react';

/* Components ---------------------------*/


const CoffeeAndTea = () => {
    
    const [imgSrc, imgSrcUpdate] = useState('/assets/img/coffee1.jpg');

    const imageOver = () => {imgSrcUpdate('assets/img/tea1.jpg')};

    const imageOut = () => {imgSrcUpdate('assets/img/coffee1.jpg')}

    return (
        <div> Coffee And Tea
            <div></div>
            <img src = {imgSrc}
                 onMouseOver= {imageOver}
                 onMouseOut= {imageOut} 
            />
            
        </div>
    )

}

export default CoffeeAndTea;