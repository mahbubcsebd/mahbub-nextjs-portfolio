import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const SkillCard = ({ skill, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut',
      }}
      className="relative group"
    >
      <div
        className={`absolute inset-0 bg-linear-to-tl ${skill.color} rounded-3xl blur-xl group-hover:scale-110 transition-transform duration-300`}
      />
      <div
        className={`absolute inset-0 rounded-3xl blur-xl group-hover:scale-110 transition-transform duration-300`}
        style={{
          background: `radial-gradient(circle at bottom right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))`,
        }}
      />

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex flex-col items-center justify-center p-8 transition-colors border border-white dark:border-gray-800 rounded-3xl aspect-square hover:border-gray-700"
        style={{
          background: 'rgba(255, 255, 255, 0.05)', // Semi-transparent white background
          backdropFilter: 'blur(50px)', // Glass blur effect
          WebkitBackdropFilter: 'blur(50px)', // For Safari support
        }}
      >
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-800/50">
          <Image
            src={skill.icon}
            alt={`${skill.name} icon`}
            className="w-8 h-8"
          />
        </div>
        <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
