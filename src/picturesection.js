import React from "react";
import "./index.css";
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
  50% {
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`
const pictureoftheday = styled.div`
animation: ${kf} 2s forwards;
`


function PictureSection(props){
    const { picturedata } = props;
    return(
        <div className='picturesection'>
            <div className ='pictureoftheday'>
            <img src={picturedata.hdurl} alt="picture of the day"></img>
            </div>
        </div>
    )
}
export default PictureSection;