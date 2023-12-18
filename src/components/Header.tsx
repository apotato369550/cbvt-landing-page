import './scss/Header.scss'
import hamburger from '../assets/hamburger.png'
import close from '../assets/close.png'

function Header() {

    return (
        <header>
            <nav className="nav">
            <h1><a href="#home" id="main-logo">Cebu Best Value Trading</a></h1>
            <hr />
            <input type="checkbox" id="nav-checkbox" className="nav-checkbox" style={{ position: 'absolute', top: '-9999px', left: '-9999px' }} />
                <label htmlFor="nav-checkbox" className="nav-toggle">
                    <img src={hamburger} width="100" height="100" className="hamburger" title="hamburger" />
                    <img src={close} width="100" height="100" className="close" title="close" />
                </label>
                <ul className="nav-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#services">Our Services</a></li>
                    <li><a href="#careers">Careers</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header