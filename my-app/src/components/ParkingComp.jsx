
import { useState } from "react";

function ParkingComp({ onChange }) {
  const [selected, setSelected] = useState(null); // track selected button

  const options = ["0", "1", "2", "3", "3+"];

  const handleClick = (value) => {
    setSelected(value); // update local state
    onChange(value); // pass value to parent
  };

  return (
    <div className="form-properties box-parking">
      <div className="head-option">Parking</div>
      <div className="box-parking-options">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => handleClick(option)}
            style={{
              backgroundColor: selected === option ? "lightblue" : "white",
              border: "1px solid #ccc",
              
              cursor: "pointer",
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ParkingComp;
