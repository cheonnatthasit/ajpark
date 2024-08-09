// eslint-disable-next-line no-unused-vars
// import Slider from "react-slick";
import react,  { useEffect } from "react";
import React from "react";
import './gridhead.css';
import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import AOS from 'aos';
import "aos/dist/aos.css";
import Video from '../assets/sky.mp4';
import DSC09576 from '../assets/ajpark-img/DSC09576.JPG';
import aj01 from '../assets/ajpark-img/aj01.png'
import aj02 from '../assets/ajpark-img/aj02.png'
import DSC09501 from '../assets/ajpark-img/DSC09501.JPG'



function Gridheader() {
  useEffect(() => {
    AOS.init({})
  }, [])

  // const settings = {
  //   dots: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
    
  // };
  return (
   
    <div className='container-grid w-100 mt-3'>
      <div className ="ConGit col-12 col-sm-10 sm:p-3 mx-auto grid grid-cols2 grid-cols-rows-4 sm:grid-cols-2 sm:grid-rows-3 md:grid-rows-2 md:grid-cols-3 xl:grid-cols-3 gap-2 col-10 ">
    
      <div className="boxImg bi01 col-span-2 row-span-2 ">

        <video src={Video} autoPlay loop muted></video>

      <div className="PathHead">
      <svg className='HeadPath-01' viewBox="0 0 579 105" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M458.99 104.5H0V15.5C0 7.21573 6.71573 0.5 15 0.5H568.698C577.893 0.5 582.214 11.8652 575.342 17.9741L492.208 91.8705C483.056 100.006 471.236 104.5 458.99 104.5Z" fill="white"/>
      </svg>
          
          <div className="list-iconsPath flex flex-row">
          <svg className='HeadPath-02' viewBox="0 0 579 105" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M458.99 104.5H0V15.5C0 7.21573 6.71573 0.5 15 0.5H568.698C577.893 0.5 582.214 11.8652 575.342 17.9741L492.208 91.8705C483.056 100.006 471.236 104.5 458.99 104.5Z" fill="#365E32"/>
          </svg>
          <div className="i01 "><FaFacebook /></div>
          <div className="i01 "><FaLine /></div>
          <div className="i01 "><BsFillTelephoneOutboundFill /></div>
          <div className="i01 "><FaMapMarkedAlt /></div>
          </div>
          
          <div className="headline-Textbg" data-aos="fade-down"
     data-aos-duration="3000" >
        <h1 className='text-7xl'>AJ PARK</h1>
        <p className='text-xl'>โครงการใหญ่ติด ม.ลาดกระบัง</p>
        <p className='text-xl'>อพาร์ตเมนต์ให้เช่า รายวัน - รายเดือน</p>
      </div>
      </div>
      
      
     
      
    <div className="bg-Img bgI-1" data-aos="fade-left"  data-aos-duration="2000" >
      <img src={aj01} alt="" />
    </div>
    <div className="bg-Img bgI-2" data-aos="fade-right"  data-aos-duration="2000" >
      <img src={aj02} alt="" />
    </div>
  
</div>

        <div className ="boxImg bi02">

        <img src={DSC09576} alt=""/>

        {/* <Slider {...settings}>
    <div className='box-slideImg'>
    <img src="/public/ajpark-img/DSC09543.JPG" alt="" />
    </div>
    <div className='box-slideImg'>
    <img src="/public/ajpark-img/DSC09543.JPG" alt="" />
    </div>
    <div className='box-slideImg'>
    <img src="/public/ajpark-img/DSC09543.JPG" alt="" />
    </div>
    <div className='box-slideImg'>
    <img src="/public/ajpark-img/DSC09543.JPG" alt="" />
    </div>
    <div className='box-slideImg'>
    <img src="/public/ajpark-img/DSC09543.JPG" alt="" />
    </div>
    <div className='box-slideImg'>
    <img src="/public/ajpark-img/DSC09543.JPG" alt="" />
    </div>
  </Slider> */}
        </div>
        <div className ="boxImg bi03">
            <img src={DSC09501} alt="" />
        </div>
  
  
    </div>

        <div className="grid grid-cols-4 menugrid gap-2 col-12 col-sm-10 mx-auto">
            <div className="menu-grid grid-cols-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-houses" viewBox="0 0 16 16">
            <path d="M5.793 1a1 1 0 0 1 1.414 0l.647.646a.5.5 0 1 1-.708.708L6.5 1.707 2 6.207V12.5a.5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 1 12.5V7.207l-.146.147a.5.5 0 0 1-.708-.708zm3 1a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708zm.707.707L5 7.207V13.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.207z"/>
            </svg>
              <p className='mb-0 ms-2'>ดูห้องตัวอย่าง</p>
            </div>
            <div className="menu-grid grid-cols-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16">
            <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
            </svg>
              <p className='mb-0 ms-2'>จองห้อง</p>
            </div>
            <div className="menu-grid grid-cols-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pin-map" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"/>
            <path fillRule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
          </svg>
                        <p className='mb-0 ms-2'>ผังโครงการ</p>
            </div>
            <div className="menu-grid grid-cols-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar2-check" viewBox="0 0 16 16">
            <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
            <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
            <p className='mb-0 ms-2'>ห้องพักรายวัน</p> 
            </div>
        </div>

</div>
  )
}

export default Gridheader
