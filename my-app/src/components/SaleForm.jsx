import FormBox from "./FormBox";

function SaleForm(){
    return (
        <>
          <div className="postBox">
            <div className="post-ad-title"><h2>POST YOUR AD</h2></div>
            <div className="form-post">
                <FormBox> </FormBox> 
            </div>
           
          </div>
          <div className="footerX"></div>
        </>
    )
}

export default SaleForm;