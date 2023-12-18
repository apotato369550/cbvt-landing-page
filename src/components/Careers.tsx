import { useState } from 'react';
import './scss/Careers.scss';

function Careers() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        validId: '',
        resume: '',
        idPicture: '',
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        // input validation
        // alert if data successfully uploaded/emailed
        console.log(formData);
    };
    
    return (
        <section id="careers">
            <div className="hiring">
                <h1>Apply now.</h1>
                <p>We are currently hiring the following:</p>
                <ul>
                    <li>Chefs</li>
                    <li>Drivers</li>
                    <li>Technicians</li>
                </ul>
                <p>Join our team today by telling us more about you</p>
            </div>

            <div className="application-portal">
                <h1>Submit your application here</h1>
                <p>(Coming Soon)</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </label>

                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </label>

                    <label>
                        Valid ID:
                        <input type="file" name="validId" accept=".jpg, .jpeg, .png" value={formData.validId} onChange={handleChange} />
                    </label>

                    <label>
                        Resume/Biodata:
                        <input type="file" name="resume" accept=".pdf, .doc, .docx" onChange={handleChange} />
                    </label>

                    <label>
                        ID Picture:
                        <input type="file" name="idPicture" accept=".jpg, .jpeg, .png" onChange={handleChange} />
                    </label>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </section >
    )
}

export default Careers