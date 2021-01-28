import React from 'react'
/* Containers--------------------------------------------------*/
import Slideshow from './Slideshow.jsx'
import Tabbed from './Tabbed.jsx'
import Staff from './Tabbed.jsx'

const Welcome = () => {
    return(
        <div>
            <h1>Welcome</h1>
            <Slideshow />
            <Tabbed />
            <Staff />
        </div>
    );
}
export default Welcome;