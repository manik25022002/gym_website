import './header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
const Header = ()=>{
    return(

<div className="header">
    <img  className='logo' src = {Logo} alt='manik' />

    <ul className='header-menu' >
        <li>Home</li>
        <li>Programs</li>
        <li>Why Us</li>
        <li>Plans</li>
        <li>Testimonials</li>
    </ul>
    
   
</div>

    )
}
export default Header;