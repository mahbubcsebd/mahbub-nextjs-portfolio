'use client';

import { motion } from 'framer-motion';

const Download = ({ handlePrint }) => {
  return (
    <motion.div
      className="fixed top-6 right-6 z-50 print:hidden"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={handlePrint}
        area-label="Download Resume"
        type="button"
        className="px-4 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition cursor-pointer"
      >
        📄 Download Resume
      </button>
    </motion.div>
  );
};

export default Download;
