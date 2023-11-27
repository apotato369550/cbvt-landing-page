import './scss/ContactUs.scss'
import { useState, useRef, ChangeEvent } from 'react'

function ContactUs() {
    const form = useRef<HTMLFormElement | null>(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    }

    const submitContactForm = (event:any) => {
        event.preventDefault();

        // send email to cebubestvaluetrading@gmail.com
    }

    return (
        <section id="contact">
            <div className="contact-form">
                <h1>Send us a message</h1>
                <form ref={form} id="contact-form">
                    <div className="user-info">
                        <input type="text" id="name" name="name" placeholder="Your Name Here" value={name} onChange={handleNameChange} required />
                        <input type="email" id="email" name="email" placeholder="Your Email Here" value={email} onChange={handleEmailChange} required />
                    </div>

                    <div className="user-message">
                        <textarea id="message" name="message" rows={5} required placeholder="Your message here..." value={message} onChange={handleMessageChange}></textarea>
                    </div>

                    <button type="submit" onClick={submitContactForm}>Send Message</button>

                </form>
            </div>

            <div className="contact-us">
                <h1>Contact Us Now</h1>
                <p>Got a burning question? A request for quotation? Need a clarification?</p>
                <p>Open a line of communication with us now by filling out the contact form.</p>
            </div>
        </section>
    )
}

export default ContactUs