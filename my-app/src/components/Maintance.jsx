function Maintenance({onChangeX,value}){
    return(
        <>
        <div className="form-properties">
            <label className="head-option">Maintenance (Monthly)</label>
            <br />
            <input
              className="box-inputX"
              type="number"
              value={value}
              onChange={(e) => onChangeX(e.target.value)}
            />
          </div>
        </>
    )
}

export default Maintenance;