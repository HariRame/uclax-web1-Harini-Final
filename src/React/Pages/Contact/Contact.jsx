import React from 'react';

/* Containers----------------------------------------- */
import Profile from './Profile.jsx'
import ContactForm from './ContactForm.jsx'
import GoogleMap from './GoogleMap.jsx'

const Contact = () => {
    return(
        <div>
            <div><h1>More information</h1></div>
                <div className = "divInline">
                    <Profile />
                    <ContactForm />
               </div>
                  
            {/* <GoogleMap /> */}
        </div>
    );
}


export default Contact;


