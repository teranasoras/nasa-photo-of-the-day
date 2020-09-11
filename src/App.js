import React, {useState, useEffect} from "react";
import "./App.css";
import dummydata from './dummydata';
import axios from 'axios';
import TitleSection from './titlesection';
import PictureSection from './picturesection';
import DescriptionSection from './descriptionsection';
import Loading from './loadingscreen'

function App() {
  const [Picturedata, setPicturedata] = useState(dummydata);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=FgjvovbIdEgMGNIHgDefY12JlDzhhyiagTnJrBW2`)
      .then(res => {
        setPicturedata(res.data);
        setLoading(false);
      })
      .catch(err => {
        setPicturedata(dummydata)
        console.log('Failed to fetch api data')
        setLoading(false);
      })
    }, []) 
  return (
    loading ?(<Loading/>):(
    <div className="App">
      <TitleSection picturedata = {Picturedata}/>
      <PictureSection picturedata = {Picturedata}/>
      <DescriptionSection picturedata = {Picturedata}/>
    </div>)
  );
}

export default App;
