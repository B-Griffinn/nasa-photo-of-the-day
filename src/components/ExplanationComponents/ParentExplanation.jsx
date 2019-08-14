import React, {useState, useEffect} from "react";
import axios from "axtios";

// Create function 
function Explanation() {
// Create useEffect hook
cosnt [explan, setExplan] = useState();

useEffect( () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=kifJIQzGxcqnP80rgzLs5yZGNcMycSWdVmsVMnqE")
}, [])

return (

 )
}

// EXPORT
export default Explanation;