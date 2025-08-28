

function Bathroom({ value, onChange, error }) {
    const options = ["1", "2", "3", "4", "4+"];
  
    return (
      <div className="form-properties box-bathroom">
        <div className="head-option">Bathrooms*</div>
        <div className="box-bathroom-options box-commonX">
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
  
  export default Bathroom;
  