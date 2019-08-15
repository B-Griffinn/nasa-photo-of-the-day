import React from "react";

import styled from "styled-components";

const DateStyle = styled.div`
    @import url("https://fonts.googleapis.com/css?family=Sawarabi+Gothic&display=swap");

    font-family: 'Sawarabi Gothic', sans-serif;

    

    background-color: #BBC7DE;
    border: 1px solid #7a7978;
    border-radius: 0.7rem;
    box-shadow: 5px 5px #7f8cb8;

    width: 15%;
    margin-left: 42%;
    margin-bottom: 15px;
`;

// Create out props 
const DateCard = props => {
    // NOTE: The value given to setState() must be of the same type as your value that is expected to be
    return (
        <DateStyle>
            <p>Image for: {props.dateDisplay}</p>
        </DateStyle>
    )
}

// EXPORT 
export default DateCard;