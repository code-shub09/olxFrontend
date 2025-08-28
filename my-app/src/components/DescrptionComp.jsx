function Description({onChangeX,error,value}) {
  return (
    <>
      <div className="form-properties">
        <label className="head-option">Description*</label>
        <br />
        <textarea
          value={value}
          onChange={(e) => onChangeX(e.target.value)}
          maxLength={4096}
        />
        <p>{value.length} / 4096</p>
        {error && (
          <p style={{ color: "red" }}>{error}</p>
        )}
      </div>
    </>
  );
}

export default Description;