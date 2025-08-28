function PriceComp({onChangeX,error,value}){
    return(
        <>
        <hr />
        <div className="form-properties set-price">
            <h2>SET PRICE</h2>
            <label className="head-option">Price (₹)</label>
            <br />
            <input
              type="number"
              value={value}
              onChange={(e) => onChangeX(e.target.value)}
            />
          </div>
         <hr />
        </>
    )
}

export default PriceComp;