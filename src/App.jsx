import React from 'react'
import Gridheader from './previewH/Gridheader.jsx';
import Card01 from './card-info/Card01.jsx';
import Video from './VideoSection/Video.jsx';
import Rooms from './Rooms/rooms.jsx';
import './index.css';
import './App.css';


function App() {
  return (
    <>
        <div className="content">
        <Gridheader />
        <div className="mt-5"></div>
        <br />
        <Rooms />
        <div className="mt-5"></div>
        <br />
        <Video />
        <div className="mt-5"></div>
        <br />  
        <Card01 />
        <div className="mt-5"></div>
        </div>

    </>
  )
}

export default App

