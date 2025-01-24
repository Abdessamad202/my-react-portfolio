import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

const CollaborateCard = () => {
    const [isArrowVisible, setIsArrowVisible] = useState(true);

    const toggleArrow = () => {
        setIsArrowVisible(!isArrowVisible);
    };

    return (
        <Link to="/contact">
            <motion.div
                className="collaborate-card mt-4 mb-4"
                whileHover={{ scale: 1.05 }} // Scale up on hover
                whileTap={{ scale: 0.95 }} // Scale down on tap
                transition={{ type: "spring", stiffness: 300 }} // Spring animation
            >
                <div className="arrow-icon" onClick={toggleArrow}>
                    {/* Animate the arrow icon */}
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={isArrowVisible ? "showing" : "hidden"}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ opacity: 1, rotate: 0 }} // Initial state
                        animate={{
                            opacity: isArrowVisible ? 1 : 0,
                            rotate: isArrowVisible ? 0 : 180,
                        }} // Animate opacity and rotation
                        transition={{ duration: 0.3 }} // Animation duration
                    >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </motion.svg>
                </div>
                <h1>
                    {"Let's"}
                    <br />
                    <span className="accent-text">collaborate</span>
                </h1>
                <p className="mt-3">
                    Unlock the potential of your product with expert design and
                    development services. {"Let's"} collaborate to create user-centered
                    solutions that not only meet your goals but also delight your users.
                </p>
            </motion.div>
        </Link>
    );
};

export { CollaborateCard };
