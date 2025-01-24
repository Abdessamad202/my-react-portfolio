import { motion } from "framer-motion"; // Import Framer Motion
import { projects } from "../data/projectData.js";

const Templates = () => {
    return (
        <div className="templates__content">
            {/* Animate the header */}
            <motion.h1
                className="header"
                initial={{ opacity: 0, y: -20 }} // Start slightly above and invisible
                animate={{ opacity: 1, y: 0 }} // Fade in and move down
                transition={{ duration: 0.5 }} // Animation duration
            >
                My Design Templates
            </motion.h1>

            <div className="row g-4">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="col-lg-6"
                        initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
                        whileInView={{ opacity: 1, y: 0 }} // Fade in and move up when in view
                        transition={{ delay: index * 0.2, duration: 0.5 }} // Staggered animation
                        viewport={{ once: true }} // Animate only once
                    >
                        <motion.div
                            className="card"
                            whileHover={{ scale: 1.05 }} // Scale up on hover
                            whileTap={{ scale: 0.95 }} // Scale down on tap
                        >
                            <div className={`preview-window ${project.className}`}></div>
                            <div className="card-body">
                                <h2 className="card-title">{project.title}</h2>
                                <p className="card-subtitle">{project.subtitle}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export { Templates };