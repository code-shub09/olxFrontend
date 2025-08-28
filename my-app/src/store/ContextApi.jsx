import { Children, createContext ,useState} from "react";

export const Wrapper=createContext();

  

function SalesProvider({children}){
    const [sales,setSales]=useState([]);
    const [isSuccess, setisSucces]=useState(false)


    return (
        <>
          <Wrapper.Provider value={{sales,setSales,isSuccess,setisSucces}} >
            {children}
          </Wrapper.Provider>
        
        </>
    )
}

export default SalesProvider;