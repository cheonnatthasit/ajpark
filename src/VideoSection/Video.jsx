import React from 'react'
import './video.css'

function Video() {
  return (
      <>
       <div className="header flex flex-col text-center mt-5 ">
    <h1 className="text-4xl">วิสัยทัศน์ของการดำเนินโครงการ</h1>
    <p>ความสะอาด ปลอดภัย เจ้เล้งให้ความสำคัญอันดับ 1</p>

    </div>
      
      <div className="Video  
      mt-5 mx-auto flex flex-col 
      md:flex-row sm:flex-col 
      items-center 
      md:space-x-2 space-y-2
      sm:space-y-2 
       md:space-y-0 
       shadow">
        
    <div className="frame-video col-12 col-md-6 ">
        <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/7gNhVHUCew0?si=ktcWYB9Wehbp_7WF" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>

    <div className="frame-video col-12 col-md-6  ">
    <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/K4pUauwABKg?si=MhDkh5p6awUETk3n" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    </div>
      
    
    </>
  )
}

export default Video
