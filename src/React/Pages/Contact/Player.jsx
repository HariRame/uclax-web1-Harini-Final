import React from 'react';
import styled from 'styled-components';

import PlayerMobile from './PlayerMobile.jsx';
import PlayerLarge from './PlayerLarge.jsx';


import useMediaQuery from '../../../common/useMediaQuery.js';

const Player = ({urls, titles}) => {
    const { isSmall } = useMediaQuery();

    console.log('url is ', urls);

    return (
        <PlayerStyled className='Player'>
            <div>

                 {
                      isSmall 
                    ? <PlayerMobile urls = {urls } titles = {titles} />
                    : <PlayerLarge urls = {urls } titles = {titles} />
                  } 
            
            </div>
            
            
        </PlayerStyled>
    );
}

export default Player;

const PlayerStyled = styled.div`

display: inline-flex;
padding: 30px;
    
`;