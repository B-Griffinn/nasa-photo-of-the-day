import React, {useState, useEffect} from "react";
import axios from "axios";
import TitleCard from "./TitleCard";

// Create function 
function Title() {
// Add useEffect Hook
const [title, setTitle] = useState();

useEffect( () => {
axios.get("https://api.nasa.gov/planetary/apod?api_key=kifJIQzGxcqnP80rgzLs5yZGNcMycSWdVmsVMnqE")
.then(res => {
    const titleStr = res.data;
    setTitle(titleStr);
}) 
.catch(err => {
    console.log(err)
})
}, [])
console.log(title)
if(!title) return <h3>Loading...</h3>

return (
    <TitleCard key={title.title} title={title.title} />
)

} //END Title funciton 

//EXPORT 
export default Title;