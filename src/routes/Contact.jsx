import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../component/footer";
import { FaFacebook } from "react-icons/fa";

import { FaMapMarkedAlt } from "react-icons/fa";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { FaLine } from "react-icons/fa";

import Bgcontact from "../assets/ajpark-img/aj01.png";
import Vdieo from "../assets/Loop.mp4";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Scrollbar } from 'swiper/modules';

function Contact() {
  return (
    <>
      <Navbar />
      <div className="Contact flex flex-col ">
        
      {/* <div className="video-bg">
          <video src={Vdieo} autoplay loop muted></video>
        </div>

        <div className="background">
          <img src={Bgcontact} alt="" />
        </div> */}

        <section className="block-contact">
          <h1 className="font-bold text-xl mb-3">ติดต่อสอบถาม</h1>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 contact-chanel flex ">
            <div className="tel box-icon">
              <a
                href="tel:+66970919724"
                className="flex flex-col justify-center items-center"
              >
                <BsTelephoneOutboundFill fontSize={30} />
                <p className="font-bold">CALL ME</p>
              </a>
            </div>

            <div className="line box-icon">
              <a
                href="https://lin.ee/PgOs6DO"
                className="flex flex-col justify-center items-center"
              >
                <FaLine fontSize={30} />
                <p className="font-bold">@ajpark</p>
              </a>
            </div>

            <div className="facebook box-icon">
              <a
                href="https://www.facebook.com/weajpark"
                className="flex flex-col justify-center items-center"
              >
                <FaFacebook fontSize={30} />
                <p className="font-bold">AJ PARk </p>
              </a>
            </div>

            <div className="maps box-icon">
              <a
                href="https://maps.app.goo.gl/SeQtAddYZZTqdKuD8"
                className="flex flex-col justify-center items-center"
              >
                <FaMapMarkedAlt fontSize={30} />
                <p className="font-bold">AJ PARK </p>
              </a>
            </div>
          </div>
          </section>

          
       

        
      </div>
      <Footer />
    </>
  );
}

export default Contact;
