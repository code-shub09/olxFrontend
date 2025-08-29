import disc from "../assets/disc.webp";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

function Success() {
  return (
    <>
      <div className="success">
        <div className="success-item1">
          <IoCheckmarkDoneCircleSharp
            size={80}
            className="dis-img-0"
            color="blue"
          ></IoCheckmarkDoneCircleSharp>
          <h4>Congratulations!</h4>
          <h6>Your Ad will go live shortly..</h6>
        </div>
        <div className="success-item2">
          <div>
            <img src={disc} className="dis-img-1" alt="" />
            <h4>Reach more buyers and sell faster</h4>
            <h6>Upgrade your Ad to a top position</h6>
          </div>
        </div>

        <div className="success-item3">
          <button className="succ-sell">Sell faster Now</button>
          <button className="succ-pre">Preview Ad</button>
        </div>
      </div>
    </>
  );
}

export default Success;
