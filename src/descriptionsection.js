import React from "react";
import "./index.css";

function DescriptionSection(props){
    const { picturedata } = props;
    return(
        <div className='descriptionsection'>
            <p>Description:{picturedata.explanation}</p>
            <div className='dateandcopyright'>
                <p>Date: {picturedata.date}</p>
                <p>copyright: {picturedata.copyright}</p>
            </div>
        </div>
    )
}
export default DescriptionSection