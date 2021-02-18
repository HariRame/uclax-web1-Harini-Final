import React from 'react';
import styled from 'styled-components';

/*Scripts------------------------------------------*/
import {mq} from '../../../common/media_queries.js'

const StaffMember = ({member}) => {

    return (
        <StaffMemberStyled className='StaffMember'>
            <img src={member.image}  />
            <h3>{member.name}</h3>
        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`

margin-bottom: 20px;
width: 200px;

@media ${mq.tablet} {
     width: 100px;  margin: 15px;
}

@media ${mq.desktop} {
    width: 200px; margin: 20px; 
}

img {
    max-width: 100%;
    display: block;
    padding: 15px;
    
}
h3 {
    margin: 15px;
    color: white;
    background-color: maroon;
    font-size: 16px;
    padding: 5px;
    
    
}
    
`;