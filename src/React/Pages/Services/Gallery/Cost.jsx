import React from 'react';
import styled from 'styled-components';

const Cost = ({d}) => {

    return (
        <CostStyled className='Cost'>
            
                  {d.cost}
           
        </CostStyled>
    );
}

export default Cost;

const CostStyled = styled.div`
    
`;