function ProName({onChangeX,error,value}){
    return(
        <>
        <div className="form-properties">
            <div className=" box-proj">
              <label className="head-option">Project Name*</label>
              <br />
              <input
                type="text"
                minLength={3}
                value={value}
                onChange={(e) => onChangeX(e.target.value)}
              />
              {error && (
                <p style={{ color: "red" }}>{error}</p>
              )}
            </div>
          </div>
        
        </>
    )
}

export default ProName;