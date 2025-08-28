import { useContext } from "react";
import Header from "./components/header";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Wrapper } from "./store/ContextApi";


function Layout(){
    const {isSuccess}=useContext(Wrapper)
    return(
        <>
         <div className="sell-property">
            <Header> </Header>
            
           <main className="main-box">
            <Outlet> </Outlet>
               
           </main>


         </div>


        </>
    )
}
export default Layout;
