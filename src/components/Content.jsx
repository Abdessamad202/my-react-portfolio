import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
      animate={{ opacity: 1, y: 0 }} // Fade in and move up
      transition={{ duration: 0.5 }} // Animation duration
      className="col-lg-8 absolute cln mt-100 mt-lg-120"
    >
      {children}
    </motion.div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
export { Wrapper };