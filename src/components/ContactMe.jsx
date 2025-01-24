import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Clear errors when the user starts typing
        setErrors({
            ...errors,
            [name]: "",
        });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { name: "", email: "", message: "" };

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email address";
            isValid = false;
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Handle form submission (e.g., sending the data to a server)
            console.log("Form submitted:", formData);

            // Reset form
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        }
    };

    return (
        <motion.div
            className="contact__content mb-100"
            initial={{ opacity: 0, y: 50 }} // Start slightly below and invisible
            animate={{ opacity: 1, y: 0 }} // Fade in and move up
            transition={{ duration: 0.5 }} // Animation duration
        >
            <h1 className="header">Contact Me</h1>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}

                    {/* Email Field */}
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}

                    {/* Message Field */}
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    {errors.message && <p className="error">{errors.message}</p>}

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1 }} // Scale up on hover
                        whileTap={{ scale: 0.95 }} // Scale down on tap
                    >
                        Send
                    </motion.button>
                </form>
            </div>
        </motion.div>
    );
};

export default ContactMe;