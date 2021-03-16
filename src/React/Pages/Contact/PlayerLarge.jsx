import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';


import {videos} from './videos.js';

const PlayerLarge = ({urls, titles}) => {

    return (
        <PlayerLargeStyled className='PlayerLarge'>
           <ReactPlayer url= {urls} width = '300px' height = '200px'/>
             <div>{titles}</div> 
        </PlayerLargeStyled>
    );
}

export default PlayerLarge;

const PlayerLargeStyled = styled.div`
    
`;