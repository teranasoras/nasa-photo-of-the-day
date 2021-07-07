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
const Load = styled.h3`
animation: ${kf} 2s forwards;
`
function Loading(props){
    return(
        <Load>Loading...</Load>
    )
}
export default Loading
