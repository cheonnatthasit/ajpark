import React from 'react'
import Gridheader from './previewH/Gridheader.jsx';
import Card01 from './card-info/Card01.jsx';
import Rooms from './Rooms/rooms.jsx';
import './index.css';
import './App.css';
import Location from './Map/Location.jsx';
import Nav from './Navbar/Navbar.jsx';


function App() {
  return (
    <>

        <Nav/>
        <div className="content">
          <Gridheader />
          <Rooms />
          <Card01 />
          <Location/>
       
       </div>

    </>
  )
}

export default App;

