import React from 'react';
import "./styles/CopyRight.css"
const CopyRight = (props) =>{

    return(
        <div className="copyRight-wrapper">
         <h5 className="byHeader">By</h5>
         <h4 className="copyRight">{ props.copyright } </h4>
        </div>
    )
}
export default CopyRight;

