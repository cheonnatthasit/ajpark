// eslint-disable-next-line no-unused-vars
import React from 'react';
import './map.css';

function Location() {
  return (
    <div className='layout-map '>
        <div className="header text-center">
        <h1 className='text-4xl '>ทำเลดีติดรั้วมหาลัย</h1>
        <p>ใกล้สนามบิน รถไฟฟ้า ทางด่วน เดินทางง่าย</p>

        </div>
        <div className="map mt-3 shadow">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15503.43882670049!2d100.75652695443723!3d13.726942386595372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d664d84437cff%3A0x3bab1fb10eb62593!2sAJ%20Park!5e0!3m2!1sth!2sth!4v1723521680139!5m2!1sth!2sth" 
        width="100%" height="450"  
        allowfullscreen loading="lazy" 
        title="responsive Google Map"
        referrerpolicy="no-referrer-when-downgrade">

        </iframe>
        </div>
    </div>
  )
}

export default Location
