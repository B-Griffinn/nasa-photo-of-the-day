import React, {useState, useEffect} from "react";
import axios from "axios"; 
import DateCard from "./DateCard";

// Create our function 
function DateParent(props) {

    
  
    return (
        <p>{props.myDate}</p>
    )
}

// EXPORT 
export default DateParent;