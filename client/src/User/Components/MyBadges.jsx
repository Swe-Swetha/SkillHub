import React from 'react'
import badge1 from "../assets/badge1.png";
import badge2 from "../assets/badge2.png";
import badge3 from "../assets/badge3.png";
function MyBadges() {
  return (
    <div className=' flex gap-4 justify-center'>
        
    <img src={badge1} width={420}/>
    <img src={badge2}  />
    <img src={badge3} width={420} />

    </div>
    
  )
}

export default MyBadges