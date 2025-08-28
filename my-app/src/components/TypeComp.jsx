
// function TypeComp({ value, onChange, error }) {
//     return (
//       <div className="box-type form-properties">
//         <div className="head-option">Type*</div>
//         <div className="box-options box-commonX">
//           <button
//             type="button"
//             className={value === "Flats / Apartments" ? "active" : ""}
//             onClick={() => onChange("Flats / Apartments")}
//           >
//             Flats / Apartments
//           </button>
//           <button
//             type="button"
//             className={value === "Independent / Builder Floors" ? "active" : ""}
//             onClick={() => onChange("Independent / Builder Floors")}
//           >
//             Independent / Builder Floors
//           </button>
//           <button
//             type="button"
//             className={value === "Farm House" ? "active" : ""}
//             onClick={() => onChange("Farm House")}
//           >
//             Farm House
//           </button>
//           <button
//             type="button"
//             className={value === "House & Villa" ? "active" : ""}
//             onClick={() => onChange("House & Villa")}
//           >
//             House & Villa
//           </button>
//         </div>
  
//         {/* ✅ fixed error rendering */}
//         {error && <p style={{ color: "red" }}>{error}</p>}
//       </div>
//     );
//   }
  
//   export default TypeComp;
  
function TypeComp({ value, onChange, error }) {
    const options = [
      "Flats / Apartments",
      "Independent / Builder Floors",
      "Farm House",
      "House & Villa",
    ];
  
    return (
      <div className="box-type form-properties">
        <div className="head-option">Type*</div>
        <div className="box-options box-commonX">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              style={{
                backgroundColor: value === option ? "lightblue" : "white",
                border: "1px solid #ccc",
                marginRight: "5px",
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              {option}
            </button>
          ))}
        </div>
  
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    );
  }
  
  export default TypeComp;
  