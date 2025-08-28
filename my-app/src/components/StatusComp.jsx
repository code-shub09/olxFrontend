// function Status({ onChange,error,value }) {
//   return (
//     <>
//       <div className="form-properties box-properties-status">
//         <div className="head-option">Status*</div>
//         <div className="box-properties-status-options box-commonX">
//           <button type="button" onClick={() => onChange("New Launch")}>
//             New Launch
//           </button>
//           <button type="button" onClick={() => onChange("Ready to Move")}>
//             Ready to Move
//           </button>
//           <button type="button" onClick={() => onChange("Under Construction")}>
//             Under Construction
//           </button>
//           {error && <p style={{ color: "red" }}>{error}</p>}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Status;
function Status({ value, onChange, error }) {
    const options = ["New Launch", "Ready to Move", "Under Construction"];
  
    return (
      <div className="form-properties box-properties-status">
        <div className="head-option">Status*</div>
        <div className="box-properties-status-options box-commonX">
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
  
  export default Status;
  
  