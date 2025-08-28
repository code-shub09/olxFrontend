import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi"; // avatar icon

function ReviewDetails() {
  const [name, setName] = useState("Shubham Singh");
  const phone = "+919873314150";

  const maxLength = 30;

  return (
    <div className="Review">
        <h3>Review Your Details</h3>
        <div className="Review-box"> 
            <div className="Review-img"></div>
            <div className="Review-name"></div>
        </div>
        <div className="Review-Num">
            <p>Your Phone Number</p>
            <p>8178568199</p>
        </div>
        
     
    </div>
  );
}

export default ReviewDetails;
