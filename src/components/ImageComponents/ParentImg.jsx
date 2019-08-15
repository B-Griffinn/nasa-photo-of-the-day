import React, {useState, useEffect} from "react";
import axios from "axios";
import Image from "./APODimg";


// Import CSS when needed

// Create function 
function ParentImg() {
// Create hook for api image
const [img, setImg] = useState();

useEffect( () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=kifJIQzGxcqnP80rgzLs5yZGNcMycSWdVmsVMnqE")
.then(res => {
    const image = res.data;
    setImg(image);

})
.catch(err => {
    console.log(err)
})

}, [] )

console.log(img)

if(!img) return <h3>Loading...</h3>

return (
    <Image key={img.url} url={img.url}/>
)
}
// Export function 
export default ParentImg;