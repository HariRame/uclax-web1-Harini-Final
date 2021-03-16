import React from 'react';
import styled from 'styled-components';

/*Scripts-------------------------------*/ 
import {loginFields} from '../../../common/formData.js';

/*Components-------------------------------------*/
import UniversalForm  from '../../Shared/UniversalForm/UniversalForm.jsx'

const LoginForm = () => {

    return (
        <LoginFormStyled className='LoginForm'>

           <div>
               Login here to start ordering.
           </div>
           <UniversalForm 
                className = 'frm'
                fields = {loginFields}
                apURL = '/email/send'
                submitText = 'Log In' /> 
          
            

           
            
        </LoginFormStyled>
    );
}

export default LoginForm;

const LoginFormStyled = styled.div`
   background-color: white;
   text-align: center;
   color: #c26c6c;
   padding: 10px;
   font-weight: 20px;
   font-size: 20px;
   

   form {
    background-color :#c3cdd6;
    margin-top: 10px;
    
   }
   button {
    color: #c26c6c;
   }
`;