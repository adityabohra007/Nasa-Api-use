import React from "react";
import "./styles/ExplainView.css";
const ExplainView = (props) =>{
    return(<p className="explainParagraph"> { props.explanation }</p>)
}

export default ExplainView;
