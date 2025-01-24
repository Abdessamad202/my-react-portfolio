import { motion } from "framer-motion"; // Import Framer Motion
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <motion.div
      className="hero__content"
      initial={{ opacity: 0, y: 50 }} // Start slightly below and invisible
      animate={{ opacity: 1, y: 0 }} // Fade in and move up
      transition={{ duration: 0.8 }} // Animation duration
    >
      {/* Animate the heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
        animate={{ opacity: 1, y: 0 }} // Fade in and move up
        transition={{ delay: 0.2, duration: 0.6 }} // Animation delay and duration
      >
        Building Innovative <span>Full Stack </span>Solutions
      </motion.h1>

      {/* Animate the paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
        animate={{ opacity: 1, y: 0 }} // Fade in and move up
        transition={{ delay: 0.4, duration: 0.6 }} // Animation delay and duration
      >
        Transforming Your Ideas into Reality With Modern Web Development Technologies
      </motion.p>

      {/* Animate the buttons */}
      <motion.div
        className="button-section"
        initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
        animate={{ opacity: 1, y: 0 }} // Fade in and move up
        transition={{ delay: 0.6, duration: 0.6 }} // Animation delay and duration
      >
        <motion.a
          href="#contact"
          className="btn-primary"
          whileHover={{ scale: 1.05 }} // Scale up on hover
          whileTap={{ scale: 0.95 }} // Scale down on tap
        >
          {"Let's Talk"}
        </motion.a>
        <motion.div
          whileHover={{ scale: 1.05 }} // Scale up on hover
          whileTap={{ scale: 0.95 }} // Scale down on tap
        >
          <Link to="/projects" className="link-secondary">
            My Work
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export { HeroSection };