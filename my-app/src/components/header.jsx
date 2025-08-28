import { useContext } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Wrapper } from '../store/ContextApi';
import olxIcon from "../assets/olxIcon.png"

function Header(){
    const {isSuccess}=useContext(Wrapper)
    console.log('succ',isSuccess);
    return (
        <>
        <div className="property-header">
            <div className='head-iconx'></div>
            {isSuccess ?( <img src={olxIcon} width={50} height={50} className='head-imgZ'></img>):( <FaLongArrowAltLeft size={30}></FaLongArrowAltLeft>)}

        </div>
        </>
    )
}

export default Header;