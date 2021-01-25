import React, {useState} from 'react';

/* Components ---------------------------*/


const Login = () => {
    
    const [imgSrc, imgSrcUpdate] = useState('/assets/img/coffee1.jpg');

    const imageOver = () => {imgSrcUpdate('assets/img/tea1.jpg')};

    const imageOut = () => {imgSrcUpdate('assets/img/coffee1.jpg')}

    return (
        <div> Coffee And Tea
            <br></br>
            <img src = {imgSrc} alt = "CoffeeOrTea"
                 onMouseOver= {imageOver}
                 onMouseOut= {imageOut} 
            />
            
        </div>
    )

}

export default Login;