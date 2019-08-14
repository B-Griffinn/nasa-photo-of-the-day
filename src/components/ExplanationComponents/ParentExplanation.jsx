import React, {useState, useEffect} from "react";
import axios from "axios";
import ExplanationCard from "./ExlpanationCard";

// Create function 
function Explanation() {
// Create useEffect hook
const [explan, setExplan] = useState();

useEffect( () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=kifJIQzGxcqnP80rgzLs5yZGNcMycSWdVmsVMnqE")
    .then(res => {
        const explanStr = res.data;
        setExplan(explanStr);
    }) 
    
    .catch(err => {
    
    })
}, [])

if(!explan) return <h3>Loading...</h3>

return (
    <ExplanationCard  key={explan.explanation} explanation={explan.explanation}/>
 )
}
// EXPORT
export default Explanation;