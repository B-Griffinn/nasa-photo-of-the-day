import React from "react";

// Create out props 
const DateCard = props => {
    // NOTE: The value given to setState() must be of the same type as your value that is expected to be
    return (
        <React.Fragment>
            <p>{props.date}</p>
        </React.Fragment>
    )
}

// EXPORT 
export default DateCard;