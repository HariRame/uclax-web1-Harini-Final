import React from 'react';
import styled from 'styled-components';

const FilterNavButton = ({category, catChosen, catChosenUpdate}) => {

    const handleCatUpdate = () => {
        catChosenUpdate(category);
    }
    
    const theClassName = (category === catChosen) 
        ? `FilterNavButton active`
        : `FilterNaveButton`
    

    return (
        <FilterNavButtonStyled className= {theClassName}>
            <button 
             onClick = {handleCatUpdate} 
            >
            {category}
             </button>
        </FilterNavButtonStyled>
    );
}

export default FilterNavButton;

const FilterNavButtonStyled = styled.div`
    button {
        display: inline-block;
        width: 150px;
        background-color: #d68787;
        padding: 10px 0px;
        margin: 0px 10px;
    }
    &.active {
        button {
            background-color: #9c1a1a;
            color: white;
        }
    }
    
`;