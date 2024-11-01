// eslint-disable-next-line no-unused-vars
// import Slider from "react-slick";
import react, { useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";

import "./gridhead.css";
import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Video from "/src/assets/Loop.mp4";
import DSC09576 from "../assets/ajpark-img/DSC09576.JPG";
import AJ01 from "../assets/ajpark-img/aj01.png"
import Bgtop from "../assets/ajpark-img/DSC09501.JPG";
import Jaeleng from "/src/assets/DSC02253.png";


function Gridheader() {
  useEffect(() => {
    AOS.init({});
  }, []);

  // const settings = {
  //   dots: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,

  // };
  
  return (
    <div className="container-grid w-100 mt-3">
      <div className="ConGit col-12 col-sm-10 sm:p-3 mx-auto grid grid-cols2 grid-cols-rows-4 sm:grid-cols-2 sm:grid-rows-3 md:grid-rows-2 md:grid-cols-3 xl:grid-cols-3 gap-2 col-10 ">
        <div className="boxImg bi01 col-span-2 row-span-2 ">
          <div className="PathHead">
            <div className="list-iconsPath flex flex-col">
              <div
                className="i01"
                data-aos="fade-right"
                data-aos-offset="300"
                 data-aos-duration="500"
                data-aos-easing="ease-in-sine"
              >
                <a target="blank" href="https://www.facebook.com/weajpark">
                  <FaFacebook />
                </a>
              </div>
              <div className="i01 "
               data-aos="fade-right"
               data-aos-offset="300"
                data-aos-duration="700"
               data-aos-easing="ease-in-sine"
              >
                <a target="blank" href="https://lin.ee/vH1qW5y">
                  <FaLine />
                </a>
              </div>
              <div className="i01 "
              data-aos="fade-right"
              data-aos-offset="300"
               data-aos-duration="900"
              data-aos-easing="ease-in-sine"
              >

                <a href="tel:+66970919724">
                  <BsFillTelephoneOutboundFill />
                </a>
              </div>
              <div className="i01 "
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-duration="1200"
              data-aos-easing="ease-in-sine">
                <a
                  target="blank"
                  href="https://maps.app.goo.gl/SeQtAddYZZTqdKuD8"
                >
                  <FaMapMarkedAlt />
                </a>
              </div>
            </div>
          </div>

          <div className="right-path">
            <h1 className="text-sm xl:text-4xl lg:text-3xl sm:text-2xl" data-aos="zoom-in-up" data-aos-duration="1200">
              AJ PARK
            </h1>
          </div>
          <div className="bg-Img bgI-1">
            <img src={Bgtop} alt="ajpark-bg" />
            <div className="left-filter"></div>
          </div>

          <div className="box-header sm:ms-5 text-start" data-aos="fade-right"  data-aos-duration="1500">
            <h1 className="text-3xl sm:text-3xl md:text-4xl xl:text-6xl">AJ PARK</h1>
            <h1 className="text-1xl sm:text-2xl xl:text-4xl">โครงการใหญ่ติด ม.ลาดกระบัง</h1>
            <h1 className="text-1xl sm:text-1xl xl:text-2xl">สิ่งอำนวยความสะดวกครบครัน</h1>
          </div>
          <div className="box-header_sm " data-aos="fade-right"  data-aos-duration="1500">
            <h1 className="text-3xl sm:text-3xl md:text-4xl xl:text-6xl">AJ PARK</h1>
            <h1 className="text-1xl sm:text-2xl xl:text-4xl">โครงการใหญ่ติด ม.ลาดกระบัง</h1>
            <h1 className="text-1xl sm:text-1xl xl:text-2xl">สิ่งอำนวยความสะดวกครบครัน</h1>
          </div>


          {/* <div className="box-name text-start ">
            <h1 className="text-2xl">JAELENG</h1>
            <h1 className="text-1xl">ARAYA LAPSHEWASITTICHARDS</h1>
            <h1 className="text-md">(เจ้เล้งดอนเมือง) กรรมการผู้จัดการโครงการ</h1>
          </div> */}

          <div className="box-Jaeleng">
            <img
              data-aos="zoom-in"
              data-aos-duration="1200"
              id="Jaeleng"
              src={Jaeleng}
              alt="jaeleng"
            />
          </div>
        </div>

        <div className="boxImg bi02">

          <img src={DSC09576} alt="" />

  
        </div>
        <div className="boxImg bi03">
        <img src={AJ01} alt="" />
          {/* <video src={Video} autoPlay loop muted></video> */}
        </div>
      </div>

      <div className="grid grid-cols-4  menugrid gap-2 col-12 col-sm-10 mx-auto">
        <div className="menu-grid grid-cols-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-houses"
            viewBox="0 0 16 16"
          >
            <path d="M5.793 1a1 1 0 0 1 1.414 0l.647.646a.5.5 0 1 1-.708.708L6.5 1.707 2 6.207V12.5a.5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 1 12.5V7.207l-.146.147a.5.5 0 0 1-.708-.708zm3 1a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708zm.707.707L5 7.207V13.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.207z" />
          </svg>
          <p className="mb-0 ms-2">ดูห้องตัวอย่าง</p>
        </div>
        <div className="">
          <a href="https://lin.ee/3Ud2RV3" target="blank" className="menu-grid grid-cols-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-file-earmark-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
          </svg>
          <p className="mb-0 ms-2">จองห้อง</p>
          </a>
        </div>
        <div className="">
          <Link to="/Pland" className="menu-grid grid-cols-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-pin-map"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"
            />
            <path
              fillRule="evenodd"
              d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
            />
          </svg>
          <p className="mb-0 ms-2">ผังโครงการ</p>
          </Link>
        </div>
        <div className="">
          <a href="https://www.facebook.com/weajpark" target="blank" className="menu-grid grid-cols-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-calendar2-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0" />
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
            <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z" />
          </svg>
          <p className="mb-0 ms-2">ห้องพักรายวัน</p>
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default Gridheader;
