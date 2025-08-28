

  

function BHKxComp({ value, onChange, error }) {
    const options = ["1", "2", "3", "4", "4+"];
  
    return (
      <div className="form-properties">
        <div className="head-option">BHK*</div>
        <div className="box-bhk-option">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              className={value === option ? "active" : ""}
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
  
  export default BHKxComp;
  