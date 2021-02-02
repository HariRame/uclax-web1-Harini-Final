import React from 'react';
import styled from 'styled-components';

/*Components---------------------------------/> */
import TabbedNavItem from './TabbedNavItem.jsx';

const TabbedNav = ({changeTabs}) => {

    return (
        <TabbedNavStyled className='TabbedNav'>
            <button onClick = {changeTabs} >Hello</button>
            <TabbedNavItem />
        </TabbedNavStyled>
    );
}

export default TabbedNav;

const TabbedNavStyled = styled.div`
    
`;