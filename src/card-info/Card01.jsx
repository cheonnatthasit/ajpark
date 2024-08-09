import react,  { useState } from "react";
import Image01 from '../assets/ajpark-img/DSC09501.JPG'; 
import Image02 from '../assets/ajpark-img/DSC09576.JPG'; 
import Image03 from '../assets/ajpark-img/DSC09554.JPG'; 
import Image04 from '../assets/ajpark-img/DSC09599.JPG'; 
import Image05 from '../assets/ajpark-img/DSC09547.JPG'; 
import Image06 from '../assets/ajpark-img/DSC09709.JPG';
import './card.css';


function Card01() {

 const [items, setItems] = useState([
   { id: 1, name: 'Slide-1', description: 'Description for Slide-1', image: Image01 },
   { id: 2, name: 'Slide-2', description: 'Description for Slide-2', image: Image02 },
   { id: 3, name: 'Slide-3', description: 'Description for Slide-3', image: Image03 },
   { id: 4, name: 'Slide-4', description: 'Description for Slide-4', image: Image04 },
   { id: 5, name: 'Slide-5', description: 'Description for Slide-5', image: Image05 },
   { id: 6, name: 'Slide-6', description: 'Description for Slide-6', image: Image06 },
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
               <button className="btn">See More</button>
             </div>
           </div>
         ))}
       </div>
     </div>


     <div className="button">
       <button className="prev" onClick={prevSlide}>
        
       </button>
       <button className="next" onClick={nextSlide}>
         
       </button>
     </div>
   </section>
   </>
 );
}


export default Card01;
