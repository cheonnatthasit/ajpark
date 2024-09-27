import React from "react";
import "./rooms.css";
import { FaBed } from "react-icons/fa6";
import { PiResizeFill } from "react-icons/pi";
import { FaBath } from "react-icons/fa";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { BiSolidShower } from "react-icons/bi";
import { MdAir } from "react-icons/md";
import { TbBrandAirtable } from "react-icons/tb";
import { FaParking } from "react-icons/fa";
import { SiCcleaner } from "react-icons/si";
import { BiSolidWasher } from "react-icons/bi";
import Room_1 from "../assets/ajpark-img/GOPR0262.JPG";
import Room_2 from "../assets/ajpark-img/GOPR0291.JPG";
import Rooms_3 from "../assets/ajpark-img/DSC09880.JPG";
import Rooms_4 from "../assets/ajpark-img/GOPR0262.JPG";

function Rooms() {
  return (
    <>
      <div className="header flex flex-col text-center mt-5 ">
        <h1 className="text-4xl">ประเภทห้องที่เรามี</h1>
        <p>เลือกห้องที่เหมาะสมกับคุณ</p>
      </div>
      <div className="cols-12 flex flex-col xl:flex-row space-between p-3 mt-5  space-y-3">
        <div className="wrapper">
          <div className="container-wrapper">
            <input type="radio" name="slide" id="c1" defaultChecked />
            <label htmlFor="c1" className="card">
              <div className="box-img">
                <img src={Room_1} alt="" />
              </div>
              <div className="row">
                <div className="icon">1</div>
                <div className="description">
                  <h4 className="text-base md:text-2xl">เตียงสองชั้น</h4>
                  <h1 className="mb-0 text-sm md:text-xl">
                    เริ่มต้น ฿ 5,500 /เดือน{" "}
                  </h1>
                </div>
              </div>
              <div className="list-icons">
                <div className="Icon-text">
                  <div className="i01 ">
                    <FaBed />
                  </div>
                  <p className="text-sm">2 beds</p>
                </div>

                <div className="Icon-text">
                  <div className="i01">
                    <PiResizeFill />
                  </div>
                  <p className="text-sm">
                    5 m<sup>2</sup>
                  </p>
                </div>

                <div className="Icon-text">
                  <div className="i01">
                    <FaBath />
                  </div>
                  <p className="text-sm">bathroom</p>
                </div>

                <div className="Icon-text">
                  <div className="i01">
                    <PiTelevisionSimpleFill />
                  </div>
                  <p className="text-sm">furniture</p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c2" />
            <label htmlFor="c2" className="card">
              <div className="box-img">
                <img src={Room_2} alt="" />
              </div>
              <div className="row">
                <div className="icon">2</div>
                <div className="description">
                  <h4 className="text-base md:text-2xl">เตียงคู่ 3.5 ฟุต</h4>
                  <h1 className="mb-0 text-sm md:text-xl">
                    เริ่มต้น ฿ 5,500 /เดือน{" "}
                  </h1>
                </div>
              </div>
              <div className="list-icons  ">
                <div className="Icon-text">
                  <div className="i01 ">
                    <FaBed />
                  </div>
                  <p className="text-sm">2 beds</p>
                </div>

                <div className="Icon-text">
                  <div className="i01">
                    <PiResizeFill />
                  </div>
                  <p className="text-sm">
                    5 m<sup>2</sup>
                  </p>
                </div>

                <div className="Icon-text">
                  <div className="i01">
                    <FaBath />
                  </div>
                  <p className="text-sm">bathroom</p>
                </div>

                <div className="Icon-text">
                  <div className="i01">
                    <PiTelevisionSimpleFill />
                  </div>
                  <p className="text-sm">furniture</p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c3" />
            <label htmlFor="c3" className="card">
              <div className="box-img">
                <img src={Rooms_3} alt="" />
              </div>
              <div className="row">
                <div className="icon">3</div>
                <div className="description">
                  <h4 className="text-base md:text-2xl">เตียงเดี่ยว 5 ฟุต</h4>
                  <h1 className="mb-0 text-sm md:text-xl">
                    เริ่มต้น ฿ 5,500 /เดือน{" "}
                  </h1>
                </div>
              </div>
              <div className="list-icons ">
                <div className="Icon-text">
                  <div className="i01 ">
                    <FaBed />
                  </div>
                  <p className="text-sm">2 beds</p>
                </div>

                <div className="Icon-text">
                  <div className="i01">
                    <PiResizeFill />
                  </div>
                  <p className="text-sm">
                    5 m<sup>2</sup>
                  </p>
                </div>

                <div className="Icon-text">
                  <div className="i01">
                    <FaBath />
                  </div>
                  <p className="text-sm">bathroom</p>
                </div>

                <div className="Icon-text">
                  <div className="i01">
                    <PiTelevisionSimpleFill />
                  </div>
                  <p className="text-sm">furniture</p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c4" />
            <label htmlFor="c4" className="card">
              <div className="box-img">
                <img src={Rooms_4} alt="" />
              </div>
              <div className="row">
                <div className="icon">4</div>
                <div className="description">
                  <h4 className="text-base md:text-2xl">
                    เตียง 2 ชั้น 5 ฟุต (23 ตรม.)
                  </h4>
                  <h1 className="mb-0 text-sm md:text-xl">
                    เริ่มต้น ฿ 6,500 /เดือน{" "}
                  </h1>
                </div>
              </div>
              <div className="list-icons ">
                <div className="Icon-text">
                  <div className="i01 ">
                    <FaBed />
                  </div>
                  <p className="text-sm">2 beds</p>
                </div>

                <div className="Icon-text">
                  <div className="i01">
                    <PiResizeFill />
                  </div>
                  <p className="text-sm">
                    5 m<sup>2</sup>
                  </p>
                </div>

                <div className="Icon-text">
                  <div className="i01">
                    <FaBath />
                  </div>
                  <p className="text-sm">bathroom</p>
                </div>

                <div className="Icon-text">
                  <div className="i01">
                    <PiTelevisionSimpleFill />
                  </div>
                  <p className="text-sm">furniture</p>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="right-boxInfo flex flex-col justify-center ">
          <h1 className="text-2xl md:text-3xl text-center mb-3 mt-3 sm:mt-5 ">
            สิ่งอํานวยความสะดวกครบครัน
          </h1>
          <div className="listIcon-furniture justify-center">
            <div className="FIcon">
              {" "}
              <BiSolidShower className="Icon-Furniture" />{" "}
              <p>เครื่องทำน้ำอุ่น</p>
            </div>
            <div className="FIcon">
              <MdAir className="Icon-Furniture" />
              <p>เครื่องปรับอากาศ</p>
            </div>
            <div className="FIcon">
              <PiTelevisionSimpleFill className="Icon-Furniture" />
              <p>โทรทัศน์</p>
            </div>
            <div className="FIcon">
              <TbBrandAirtable className="Icon-Furniture" />
              <p>เฟอร์นิเจอร์</p>
            </div>
            <div className="FIcon">
              <FaParking className="Icon-Furniture" />
              <p>ลานจอดรถ</p>
            </div>
            <div className="FIcon">
              <SiCcleaner className="Icon-Furniture" />
              <p>ทำความสะอาดฟรี</p> <p>1ครั้ง/เดือน</p>
            </div>
            <div className="FIcon">
              <BiSolidWasher className="Icon-Furniture" />
              <p>เครื่องซักผ้า</p> <p>มีให้ทุกตึก</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rooms;
