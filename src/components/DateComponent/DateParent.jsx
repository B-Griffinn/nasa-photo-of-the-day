import React, {useState, useEffect} from "react";
import axios from "axios"; 
import DateCard from "./DateCard";

// Create our function 

function DateParent() {
    // Create effect hook
    const [day, setDay] = useState();

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=kifJIQzGxcqnP80rgzLs5yZGNcMycSWdVmsVMnqE")
        .then(res => {
            const dateStr = res.data;
            setDay(dateStr);
        }) 
        .catch(err => { } );
    }, [] )
    
    if(!day) return <h3>Loading...</h3>
    
    
    return (
        <DateCard key={day.date} dateDisplay={day.date}/>
    )
}

// EXPORT 
export default DateParent;