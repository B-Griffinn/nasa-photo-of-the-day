import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    background-color: lightGrey;
`;

// Create props
const TitleCard = props => {
 // NOTE: The value given to setState() must be of the same type as your value that is expected to be
 return (
     <StyledDiv className="title-card"> 
        <h3>{props.title}</h3>
     </StyledDiv>
 )
} // END props

export default TitleCard;