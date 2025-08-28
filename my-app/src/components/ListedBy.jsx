
function ListedBy({ value, onChange, error }) {
    const options = ["Builder", "Dealer", "Owner"];
  
    return (
      <div className="form-properties box-listed">
        <div className="head-option">Listed By*</div>
        <div className="box-listed-options box-commonX">
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
  
  export default ListedBy;
  