import React from 'react';
import styled from 'styled-components';

/*Components---------------------------------/> */
import TabbedNavItem from './TabbedNavItem.jsx';
import { tabItems } from './tabbed_data.js';

const TabbedNav = ({changeTabs,tabItems,chosenTab}) => {

    return (
        <TabbedNavStyled className='TabbedNav'> {
            tabItems.map((tabItem,idx) => {
                return <TabbedNavItem 
                            key = { idx }
                            tabItem = { tabItem }
                            changeTabs = { changeTabs }
                            chosenTab = { chosenTab }
                        />
            })
        }
         </TabbedNavStyled>
    );
}

export default TabbedNav;

const TabbedNavStyled = styled.div`
    
`;