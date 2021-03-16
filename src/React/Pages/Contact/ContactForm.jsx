import React from 'react';
import styled from 'styled-components';

/*Scripts----------------------------------------*/
import {contactFields} from '../../../common/formData.js';

/*Components------------------------------------*/
import UniversalForm from '../../Shared/UniversalForm/UniversalForm.jsx';

const ContactForm = () => {

    console.log('contactFields is', contactFields);

    return (
        <ContactFormStyled className='ContactForm'>
            <div className = "text">
            For more information, call us at 408-476-8799 or email as at har@gmail.com. 
            </div>
             
             <UniversalForm 
                
                fields = {contactFields}
                apURL = '/email/send'
                submitText = 'Send Email' /> 
            
        </ContactFormStyled>
    );
}

export default ContactForm;

const ContactFormStyled = styled.div`
        
       width: 50%; 
       margin-top: 20px;
       .text {
           text-align: center;
           font-size: 20px;
           font-weight: 10px;
           color: #9c1a1a;
           
       }
       
`;