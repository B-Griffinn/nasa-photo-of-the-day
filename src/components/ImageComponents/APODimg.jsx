import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 500px;
  border-radius: 0.7rem;
  margin: 2rem;
  opacity: 0.8;
`;

const Image = props => {
      // NOTE: The value given to setState() must be of the same type as your value that is expected to be
      return (
          <div >
            <StyledImage className="apiImg" alt="cool image" src={props.url}/>
          </div>
         
      )
}


export default Image;