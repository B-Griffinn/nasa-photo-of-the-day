import React from "react";

// Create props
const TitleCard = props => {
 // NOTE: The value given to setState() must be of the same type as your value that is expected to be
 return (
     <div className="title-card"> 
        <h3>{props.title}</h3>
     </div>
 )
} // END props

export default TitleCard;