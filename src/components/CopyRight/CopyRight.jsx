import React, {useState, useEffect} from "react";
import axios from "axios"; 

import CopyCard from "./CopyCard";

// Create our function 
function CopyRight() {
// Create effect hook
const [copyR, setCopyR] = useState();

useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=kifJIQzGxcqnP80rgzLs5yZGNcMycSWdVmsVMnqE") 

    .then(res => {
        const copyHolder = res.data;
        setCopyR(copyHolder);
    }) 
    
    .catch(err => { } )
}, [] )
if(!copyR) return <h3>Loading...</h3>
return (
    <CopyCard />
)
}