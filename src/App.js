import React, {useState, useEffect} from "react";
import "./App.css";
import dummydata from './dummydata';
import axios from 'axios';
import TitleSection from './titlesection';
import PictureSection from './picturesection';
import DescriptionSection from './descriptionsection';


function App() {
  const [Picturedata, setPicturedata] = useState(dummydata);
  // useEffect(() => {
  //   axios.get(`https://api.nasa.gov/planetary/apod?api_key=FgjvovbIdEgMGNIHgDefY12JlDzhhyiagTnJrBW2`)
  //     .then(res => {
  //       setPicturedata(res.data);
  //     })
  //     .catch(err => {
  //       setPicturedata(dummydata)
  //       console.log('Failed to fetch api data')
  //     })
  //   }, []) 
  return (
    <div className="App">
      <TitleSection picturedata = {Picturedata}/>
      <PictureSection picturedata = {Picturedata}/>
      <DescriptionSection picturedata = {Picturedata}/>
    </div>
  );
}

export default App;
