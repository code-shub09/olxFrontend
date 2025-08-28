
function Builtup({ value, onChange, error }) {
    return (
      <div className="form-properties">
        <div>
          <label className="head-option">Super Builtup Area (sqft)*</label>
          <br />
          <input
            className="box-inputX com-inputZ"
            type="number"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    );
  }
  
  export default Builtup;
  