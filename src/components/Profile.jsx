import { motion } from "framer-motion"; // Import Framer Motion

const Profile = () => {
    return (
        <motion.div
            className="col-lg-4 fixed cln mt-50"
            initial={{ opacity: 0, x: -50 }} // Start slightly to the left and invisible
            animate={{ opacity: 1, x: 0 }} // Fade in and move to the right
            transition={{ duration: 0.5 }} // Animation duration
        >
            <div className="text-center profile-card">
                {/* Animate the profile image */}
                <motion.img
                    src="/assets/profile.jpg"
                    alt="Profile"
                    className="profile-img mb-4"
                    initial={{ scale: 0 }} // Start small
                    animate={{ scale: 1 }} // Scale up to normal size
                    transition={{ delay: 0.2, duration: 0.5 }} // Animation delay and duration
                />

                {/* Animate the name */}
                <motion.h1
                    className="text-white fs-3 fw-bold mb-2"
                    initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
                    animate={{ opacity: 1, y: 0 }} // Fade in and move up
                    transition={{ delay: 0.4, duration: 0.5 }} // Animation delay and duration
                >
                    Abdessamad Kechchaf
                </motion.h1>

                {/* Animate the job title */}
                <motion.p
                    className="text-custom-gray mb-1"
                    initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
                    animate={{ opacity: 1, y: 0 }} // Fade in and move up
                    transition={{ delay: 0.6, duration: 0.5 }} // Animation delay and duration
                >
                    Junior Full Stack Developer
                </motion.p>

                {/* Animate the location */}
                <motion.p
                    className="text-custom-gray mb-4"
                    initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
                    animate={{ opacity: 1, y: 0 }} // Fade in and move up
                    transition={{ delay: 0.8, duration: 0.5 }} // Animation delay and duration
                >
                    Mohammedia, Morocco
                </motion.p>

                {/* Animate the social icons */}
                <motion.div
                    className="d-flex social-icons justify-content-center align-items-center"
                    initial={{ opacity: 0 }} // Start invisible
                    animate={{ opacity: 1 }} // Fade in
                    transition={{ delay: 1, duration: 0.5 }} // Animation delay and duration
                >
                    <motion.svg
                        className="social-icon"
                        viewBox="0 0 24 24"
                        whileHover={{ scale: 1.2 }} // Scale up on hover
                        whileTap={{ scale: 0.9 }} // Scale down on tap
                    >
                        <path
                            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm10 12c0 .74-.07 1.48-.21 2.17-.52-.11-2.79-.56-5.95-.78-.23-.6-.46-1.15-.72-1.69l-.03-.06c3.29-1.43 4.8-3.27 4.91-3.39c1.23 1.65 2 3.71 2 5.75zm-2.16-6.26c-.09.11-1.51 1.83-4.68 3.14-.79-1.46-1.67-2.7-1.81-2.89 1.37-.33 2.82-.51 4.32-.51 .77 0 1.51.07 2.23.21.01.01-.03.02-.06.05zM12 2c1.46 0 2.84.3 4.1.84-.03.04-.86 1.2-2.68 2.23-1.07-1.97-2.25-3.6-2.45-3.89C11.33 2.05 11.66 2 12 2zM9.27 1.84c.19.28 1.37 1.9 2.45 3.84-3.07 1.15-5.08 1.22-5.91 1.22-.24 0-.43-.01-.57-.02C6.01 4.39 7.48 2.71 9.27 1.84zM2 12c0-.93.13-1.83.36-2.68.2.01.48.02.81.02 1.08 0 3.47-.15 6.72-1.39.18.35.36.71.52 1.08-3.7 1.1-5.67 4.11-5.94 4.55C2.87 14.1 2 13.11 2 12zm3.89 4.38c.19-.34 1.98-3.15 5.77-4.31.95 2.47 1.34 4.55 1.44 5.15-.73.31-1.52.48-2.36.48-1.86 0-3.57-.63-4.85-1.32z"
                        />
                    </motion.svg>
                    <motion.svg
                        className="social-icon"
                        viewBox="0 0 24 24"
                        whileHover={{ scale: 1.2 }} // Scale up on hover
                        whileTap={{ scale: 0.9 }} // Scale down on tap
                    >
                        <path
                            d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
                        />
                    </motion.svg>
                    <motion.svg
                        className="social-icon"
                        viewBox="0 0 24 24"
                        whileHover={{ scale: 1.2 }} // Scale up on hover
                        whileTap={{ scale: 0.9 }} // Scale down on tap
                    >
                        <path
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                        />
                    </motion.svg>
                    <motion.svg
                        className="social-icon"
                        viewBox="0 0 24 24"
                        whileHover={{ scale: 1.2 }} // Scale up on hover
                        whileTap={{ scale: 0.9 }} // Scale down on tap
                    >
                        <path
                            d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"
                        />
                    </motion.svg>
                </motion.div>
            </div>
        </motion.div>
    );
};

export { Profile };