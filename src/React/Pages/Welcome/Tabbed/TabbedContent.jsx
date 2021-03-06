import React from 'react';
import styled from 'styled-components';

/*-- Scrpt---------------------*/
import {mq} from '../../../../common/media_queries.js'

const TabbedContent = ({chosenTab}) => {

    return (
        <TabbedContentStyled className='TabbedContent'>
            <div className = "left">
                <img src = {chosenTab.image} alt = "Tab Image"/>
            </div>
            <div className = "right">
                <h3>{chosenTab.title}</h3>
                <div dangerouslySetInnerHTML = {{ __html: chosenTab.text}}/>
            </div>    
            
        </TabbedContentStyled>
    );
}

export default TabbedContent;

const TabbedContentStyled = styled.div`
 background-color: #e25555;
 padding:20px;

 @media ${mq.desktop} {
    display: flex;
    //outline: solid 1px red;
    padding: 10px;
 }
.left {
    flex: 1;
    //outline: solid 1px purple;
    padding: 10px;
    img {max-width: 100%;}
}
 
.right {
    //outline: solid 1px white;
    padding: 10px;
    flex:4;
} 

@media ${mq.desktop} {
  .right {
      padding: 0px 20px;
  }
}
    
`;