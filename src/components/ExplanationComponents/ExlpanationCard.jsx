import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
  width: 80%;
  margin-left: 10%;
  font-family: sans-serif;
  text-align: center;
  background-color: #bbc7de;

  border: 1px solid #7a7978;
  border-radius: 0.7rem;
  box-shadow: 5px 5px #7f8cb8;
`;

// Create props
const ExplainProps = props => {
     // NOTE: The value given to setState() must be of the same type as your value that is expected to be
     return (
        <WrapperDiv>
            <p>{props.explanation}</p>
        </WrapperDiv>
     )
}

// EXPORT
export default ExplainProps;