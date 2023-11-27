import './scss/Services.scss'
import warehouse from '../assets/warehouse.jpg'

function Services() {

    return (
        <section id="services">
            <img src={warehouse} alt="warehouse" className="warehouse" />
            <div className="service-list">
                <h1>Our Services</h1>
                <ul>
                    <li>Food Packs</li>
                    <li>Airconditioner sales, repair, and installation</li>
                    <li>Buy and sell</li>
                </ul>
            </div>
        </section>
    )
}

export default Services