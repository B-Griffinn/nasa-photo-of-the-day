import React from "react";

// Create out props 
const DateCard = props => {
    // NOTE: The value given to setState() must be of the same type as your value that is expected to be
    return (
        <>
            <p>{props.date}</p>
        </>
    )
}