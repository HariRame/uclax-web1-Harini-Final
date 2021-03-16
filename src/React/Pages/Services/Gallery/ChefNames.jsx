import React from 'react';
import styled from 'styled-components';

const ChefNames = ({d}) => {

    return (
        <ChefNamesStyled className='ChefNames'>
             
                 
                
                  {d.chef}
                
                 {/* <div className = 'lightBoxChefNamesCost'>
                  {d.cost}
                 </div> */}
                
                
            
        </ChefNamesStyled>
    );
}

export default ChefNames;

const ChefNamesStyled = styled.div`

.lightBoxChefNamesChef {
        /* margin-top: 40px; */
        /* padding-right: 30px; */
         /* margin-left:  40px;  */
         margin: 40px;
        color: maroon;
        display: inline;
        
        font-size: 20px;

    }

    .lightBoxChefNamesCost {
        /* margin-top: 40px; */
         margin-right: 100px; 
          
        color: maroon;
        display: inline;
        font-size: 20px;
        text-align: center;

    }

    
`;