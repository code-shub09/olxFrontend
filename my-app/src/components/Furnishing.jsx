
function Furnishing({ value, onChange, error }) {
    const options = ["Furnished", "Semi-Furnished", "Unfurnished"];
  
    return (
      <div className="form-properties box-furnishing">
        <div className="head-option">Furnishing*</div>
        <div className="box-furnishing-options box-commonX">
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
  
  export default Furnishing;
  