import React from "react";


const Image = props => {
      // NOTE: The value given to setState() must be of the same type as your value that is expected to be
      return (
          <div className="image-card">
            <img className="apiImg" alt="cool image" src={props.url}/>
          </div>
         
      )
}


export default Image;