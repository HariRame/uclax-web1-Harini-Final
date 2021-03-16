import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';

import Player from './Player.jsx';
import {videos} from './videos.js';

const PlayerMobile = ({urls, titles}) => {

    return (
        <PlayerMobileStyled className='PlayerMobile'>
            <ReactPlayer url= {urls} width = '50%' height = '50%'/>
             <div>{titles}</div> 
        </PlayerMobileStyled>
    );
}

export default PlayerMobile;

const PlayerMobileStyled = styled.div`
    
`;