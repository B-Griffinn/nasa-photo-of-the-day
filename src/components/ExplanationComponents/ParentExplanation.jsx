import React, {useState, useEffect} from "react";
import axios from "axios";
import ExplanationCard from "./ExlpanationCard";

// Create function 
function Explanation(props) {



return (
    <p>{props.myExplanation}</p>
 )
}
// EXPORT
export default Explanation;