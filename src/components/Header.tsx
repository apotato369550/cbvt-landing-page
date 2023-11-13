import './scss/Header.scss'

function Header() {

    return (
        <header>
            <nav className="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#services">Our Services</a></li>
                    <li><a href="#careers">Careers</a></li>
                    <li><a href="#contact-us">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header