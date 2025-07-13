'use client';

import { motion } from 'framer-motion';

const Download = ({ handlePrint }) => {
  return (
    <motion.div
      className="fixed z-50 bottom-6 lg:bottom-10 right-6 print:hidden"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={handlePrint}
        area-label="Download Resume"
        type="button"
        className="px-4 py-2 text-white transition bg-indigo-600 shadow cursor-pointer rounded-xl hover:bg-indigo-700"
      >
        📄 Download Resume
      </button>
    </motion.div>
  );
};

export default Download;
