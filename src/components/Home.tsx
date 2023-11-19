import './scss/Home.scss'
import cebuCity from '../assets/cebu-city.jpg'

function Home() {

    return (
        <section id="home">
            <img className="cebu-city" src={cebuCity} alt="cebu city" />
            <div className="caption">
                <h1>Cebu Best Value Trading Corporation</h1>
                <p> Setting the standard for value. Smart choices, affordable prices on the services you need. </p>
            </div>
        </section>
    )
}

export default Home