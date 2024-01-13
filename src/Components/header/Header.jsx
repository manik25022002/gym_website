import './header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { useState } from 'react';
import {Link} from "react-scroll";
const Header = () => {

    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuopen, setmenuopen] = useState(false);


    return (
        <>
            <div className="header">
                <img className='logo' src={Logo} alt='manik' />
                {(menuopen === false && mobile === true) ? (
                    <div
                        style={{
                            backgroundColor: 'var(--appColor)',
                            padding: '0.5rem',
                            borderRadius: '5px'
                        }}
                        onClick={() => setmenuopen(true)}
                    >

                        <img src={Bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />

                    </div>

                )
                    : (

                        <ul className='header-menu' >
                            <li onClick={() => setmenuopen(false)} >Home</li>
                            <li onClick={() => setmenuopen(false)} >Programs</li>
                            <li onClick={() => setmenuopen(false)} >Why Us</li>
                            <li onClick={() => setmenuopen(false)} >Plans</li>
                            <li onClick={() => setmenuopen(false)} >Testimonials</li>
                        </ul>
                    )}



            </div >
        </>

    )
}
export default Header;