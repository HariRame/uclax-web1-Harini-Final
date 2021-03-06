import React, {useState} from 'react'

/* Containers ---------------------------------------------*/
import FilterNav from './FilterNav/FilterNav.jsx'
import Gallery from './Gallery/Gallery.jsx'

import {services} from './servicesData.js'

const Services = () => {
    const [catChosen, catChosenUpdate] = useState('All');
    console.log('catChosen', catChosen);
    return(
        <div>
            <h1>Categories</h1>
            <FilterNav services ={ services }  
                       catChosen = {catChosen}
                       catChosenUpdate = {catChosenUpdate}/>
            <Gallery services = { services } 
                     catChosen = {catChosen} 
                      />
        </div>
    );
} 
export default Services;