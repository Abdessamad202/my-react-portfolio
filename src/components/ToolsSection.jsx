import { motion } from "framer-motion"; // Import Framer Motion
import { tools } from "../data/toolsData.js";

const ToolsSection = () => {
    return (
        <div className="tools_content">
            {/* Animate the header */}
            <motion.h1
                className="header"
                initial={{ opacity: 0, y: -20 }} // Start slightly above and invisible
                animate={{ opacity: 1, y: 0 }} // Fade in and move down
                transition={{ duration: 0.5 }} // Animation duration
            >
                My Developer Toolkit
            </motion.h1>

            <div className="row">
                {tools.map((tool, index) => (
                    <motion.div
                        key={index}
                        className="col-md-4 col-sm-6"
                        initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
                        animate={{ opacity: 1, y: 0 }} // Fade in and move up
                        transition={{ delay: index * 0.2, duration: 0.5 }} // Staggered animation
                    >
                        <motion.div
                            className="card"
                            whileHover={{ scale: 1.05 }} // Scale up on hover
                            whileTap={{ scale: 0.95 }} // Scale down on tap
                        >
                            <img src={tool.imgSrc} alt={tool.alt} className="img-fluid" />
                            <h3>{tool.title}</h3>
                            <p>{tool.description}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export { ToolsSection };
