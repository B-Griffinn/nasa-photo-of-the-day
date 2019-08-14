import React, {useState, useEffect} from "react";
import "./App.css";
// Import Axios
import axios from "axios";

function App() {
  // Add effect hook for api
  const [apod, setApod] = useState("");

  // Create out useEffect
  useEffect( () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=kifJIQzGxcqnP80rgzLs5yZGNcMycSWdVmsVMnqE")
    .then(res => {
      console.log(res)
    }) 
    .catch(err => {
      console.log(err)
    })
  }, [] )

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
