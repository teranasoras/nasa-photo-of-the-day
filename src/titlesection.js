import React from "react";
import "./index.css";

function TitleSection(props){
    const { picturedata } = props;
    return(
        <div className='titlesection'>
            <h2 className='pictitle'>{picturedata.title}</h2>
        </div>
    )
}
export default TitleSection