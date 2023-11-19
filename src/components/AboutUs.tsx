import './scss/AboutUs.scss'

function AboutUs() {

    return (
        <section id="about-us">
            <div className="company-description">
                <h1>Who we are.</h1>
                <p>Welcome to Cebu Best Value Trading Corporation, where quality meets affordability. 
                </p>
                <p>We look forward to serving you and becoming your go-to source for quality products at the best prices.
                </p>
                <p>Find our office at Pres. Magsaysay Street, Kasambagan
                </p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.1911664985146!2d123.91337884239076!3d10.326581092083813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9991a357652a1%3A0xb297a9bd10eed65c!2sPres.%20Magsaysay%20St%2C%20Cebu%20City%2C%206000%20Cebu!5e0!3m2!1sen!2sph!4v1700289962833!5m2!1sen!2sph" width="600" height="450"  allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="location"></iframe>
        </section>
    )
}

export default AboutUs