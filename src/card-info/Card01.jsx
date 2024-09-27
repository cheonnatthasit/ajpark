import react,  { useState } from "react";
import Image01 from '../assets/ajpark-img/DSC09501.JPG'; 
import Image02 from '../assets/ajpark-img/DSC09576.JPG'; 
import Image03 from '../assets/ajpark-img/DSC09554.JPG'; 
import Image04 from '../assets/ajpark-img/DSC09599.JPG'; 
import Image05 from '../assets/ajpark-img/DSC09547.JPG'; 
import Image06 from '../assets/ajpark-img/DSC09709.JPG';
import './card.css';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

function Card01() {

 const [items, setItems] = useState([
   { id: 1, name: 'ปลอดภัยสูง', description: 'มี รปภ. ประจำการตลอด 24 ช.ม.', image: Image01 },
   { id: 2, name: 'ที่จอดรถ', description: 'มีที่จอดรถเพียงพอทุกตึก', image: Image02 },
   { id: 3, name: 'มีลานกว้าง', description: 'มีลานให้ทำกิจกรรมตามสบาย', image: Image03 },
   { id: 4, name: 'พื้นที่สีเขียว', description: 'ธรรมชาติล้อมรอบโครงการ', image: Image04 },
   { id: 5, name: 'สิ่งศักดิ์สิทธิ์', description: 'พระพรหมผู้ปกปักดูแลโครงการ กราบไหว้ขอพรได้', image: Image05 },
   { id: 6, name: 'พื้นที่สะอาด', description: 'ความสะอาดเป็นเลิศ เพราะห้ามถอดรองเท้าไว้หน้าประตู', image: Image06 },
 ]);


 const nextSlide = () => {
   setItems(prevItems => {
     const newItems = [...prevItems];
     newItems.push(newItems.shift());
     return newItems;
   });
 };


 const prevSlide = () => {
   setItems(prevItems => {
     const newItems = [...prevItems];
     newItems.unshift(newItems.pop());
     return newItems;
   });
 };


 return (
  <>
  <div className="header flex flex-col text-center mt-5 ">
  <h1 className="text-4xl">บรรยากาศรอบโครงการ</h1>
  <p>มีพื้นที่สีเขียว ลานจอดรถ พื้นที่พักผ่อนเต็มที่ </p>

  </div>
   <section className="Slider m-2 flex flex-col justify-center items-center shadow">
     <div className="app-container">
       <div className="slide">
         {items.map((item) => (
           <div
             key={item.id}
             className={`item item-0${item.id}`}
             style={{
               backgroundImage: `url(${item.image})`,
             }}
           >
             <div className="content">
               <div className="name">{item.name}</div>
               <div className="des">{item.description}</div>
               
             </div>
           </div>
         ))}
       </div>
     </div>

     <div className="button">
       <button className="prev" onClick={prevSlide}>
       <FaRegArrowAltCircleLeft />
       </button>
       <button className="next" onClick={nextSlide}>
       <FaRegArrowAltCircleRight />
       </button>
     </div>
   </section>
   </>
 );
}


export default Card01;
