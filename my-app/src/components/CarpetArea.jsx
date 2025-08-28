function CarpetArea({onChangex,error,value}){
    return(
        <>
         <div className="form-properties">
            <label className="head-option">Carpet Area (sqft)</label>
            <br />
            <input
              className="box-inputX"
              type="number"
              value={value}
              onChange={(e) => onChangex(e.target.value)}
            />
          </div>
        </>
    )
}

export default CarpetArea;