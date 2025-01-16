import { useState } from 'react';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., sending the data to a server)
        console.log(formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="contact__content mb-100">
            <h1 className="header">Contact Me</h1>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>

                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;
