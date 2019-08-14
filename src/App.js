import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import ParentImg from "./components/ImageComponents/ParentImg";
import ParentTitle from "./components/TitleComponents/ParentTitle";
import ParentExplanation from "./components/ExplanationComponents/ParentExplanation";

function App() {
  // Add effect hook for api
  const [apod, setApod] = useState("");

  // Create out useEffect
  useEffect( () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=kifJIQzGxcqnP80rgzLs5yZGNcMycSWdVmsVMnqE")
    .then(res => {
      const dataAPi = res.data;
      setApod(dataAPi);
      console.log(dataAPi) // Entire Object
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
      <div className="my-content-container">
        <ParentImg />
        <ParentTitle />
        <ParentExplanation />
      </div>
    </div>
  );
}

export default App;
