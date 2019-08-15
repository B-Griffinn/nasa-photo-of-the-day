import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import ParentImg from "./components/ImageComponents/ParentImg";
import ParentTitle from "./components/TitleComponents/ParentTitle";
import ParentExplanation from "./components/ExplanationComponents/ParentExplanation";
import DateParent from "./components/DateComponent/DateParent";

import styled from "styled-components";

const StyleApp = styled.div`
background-color: lightGrey;
width: 80%;

margin-left: 10%;
margin-bottom: 15px;
`;


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
    <StyleApp className="App">
      <p>
        A new random image from NASA, DAILY 🚀!
      </p>
      <div className="my-content-container">
        <ParentImg />
        <ParentTitle />
        <DateParent />
        <ParentExplanation />
      </div>
    </StyleApp>
  );
}

export default App;
