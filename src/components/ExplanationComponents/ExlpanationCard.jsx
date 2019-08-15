import React from "react";

// Create props
const ExplainProps = props => {
     // NOTE: The value given to setState() must be of the same type as your value that is expected to be
     return (
        <React.Fragment>
            <p>{props.explanation}</p>
        </React.Fragment>
     )
}

// EXPORT
export default ExplainProps;