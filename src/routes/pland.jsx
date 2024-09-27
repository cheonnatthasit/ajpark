import React from "react";
import "./All-page.css";
import Navbar from "../Navbar/Navbar";
import PLAND from "../assets/ajpark-img/NewIcogram 2024-05-30 10_03 (1).png";
import Build1 from "../assets/ajpark-img/เปลนอาคาร ชั้น1.JPG";
import Build2 from "../assets/ajpark-img/เปลนอาคาร ชั้น2.JPG";
import Build3 from "../assets/ajpark-img/เปลนอาคาร ชั้น3.JPG";
import Build4 from "../assets/ajpark-img/เปลนอาคาร ชั้น4.JPG";
import Footer from '../component/footer';

function Pland() {
  return (
    <>
      <Navbar />
      <div className="web-box p-3">
      <div className="flex flex-col text-center">
        <h1 className="text-2xl font-bold mt-5 ">แผนผังโครงการ</h1>
      </div>

      <div className="plan mt-3 flex flex-row justify-center">
        <img className="rounded-xl sm:w-full" src={PLAND} alt=""  />
        <h1 onClick={() => document.getElementById("my_modal_2").showModal()} className="View text-xl font-bold">ดูข้อมูลเพิ่มเติม</h1>
      </div>

      <div className="flex flex-col text-center">
        <h1 className="text-2xl font-bold mt-5 ">แผนที่ตั้งโครงการ</h1>
      </div>

      <div className="box-maps flex flex-row justify-center">
   
        <iframe  className="rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15503.43882670049!2d100.75652695443723!3d13.726942386595372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d664d84437cff%3A0x3bab1fb10eb62593!2sAJ%20Park!5e0!3m2!1sth!2sth!4v1723521680139!5m2!1sth!2sth" 
        width="100%" height="450"  
        allowfullscreen loading="lazy" 
        title="responsive Google Map"
        referrerpolicy="no-referrer-when-downgrade">

        </iframe>
    
      </div>
     


      {/* Open the modal using document.getElementById('ID').showModal() method */}
    
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box space-y-2">
          <h3 className="font-bold text-lg">แผนผังตึก</h3>
          <img src={Build1} alt="" />
          <img src={Build2} alt="" />
          <img src={Build3} alt="" />
          <img src={Build4} alt="" />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      </div>
      <Footer />
    </>
  );
}

export default Pland;
