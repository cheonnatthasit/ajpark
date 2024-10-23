import React from "react";
import "./tab-bar.css";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import LineAJ from "../assets/L_gainfriends_2dbarcodes_BW.png";


function Footer() {
  return (
    <div className="Footer-con">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="box-1">
          <img src="../assets/ajpark-img/aj park.jpg" alt="" />
          <h1 className="text-white">
          โครงการ AJ-PARK 701 ซอย ฉลองกรุง 1 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520
          </h1>
          <br />
          
          <div className="menu-list flex flex-col">
         <Link to='/Dayroom'><a href="" className="text-white">ห้องพักรายวัน</a></Link> 
          <a href="http://" className="text-white">ห้องพักรายเดือน</a>
          <a href="http://" className="text-white">จองห้องพัก</a>
          <a href="http://" className="text-white">แจ้งซ่อม</a>
          </div>

          <h1 className="text-white mt-3">ติดตามเรื่องราวดีๆ กับ AJ PARK เพื่อต่อติดกับเรา</h1>
           <div className="addline mt-2">
            <img src={LineAJ} alt="@ajpark" />
           </div>
          
          
        </div>
        <div className="box-2 ">
        <h1 className="text-white mb-3">          
            เชื่อมต่อบริการและผลิตภัณฑ์ของ AJ PARK ทางโซเชียล
          </h1>
          <h1 className="text-white font-bold mb-2">ติดตามข่าวสาร</h1>
          <div className="List-icons text-white flex space-x-5 text-xl mb-4">
          <a href="https://www.facebook.com/weajpark" target="blank"><FaFacebook /></a>
          <a href="https://line.me/R/ti/p/@368ftlhb?ts=04241630&oat_content=url" target="blank"><FaLine /></a>
          <a href="http://"><FaPhoneVolume /></a>
          <a href="https://www.youtube.com/watch?v=7gNhVHUCew0"  target="blank"><FaYoutube /></a>
          </div>
          
          <div className="foot-bottom flex flex-row">
      <h1 className="text-white">
            © Copyright 2024 AJ PARK All Rights Reserved Made with by Natthasit
            Chitkha
          </h1>

      </div>
        </div>
      </div>

      
    </div>
  );
}

export default Footer;
