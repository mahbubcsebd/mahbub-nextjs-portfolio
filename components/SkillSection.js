'use client';

import skills from '@/constant/skills';
import useDictionary from '@/hooks/useDictionary';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SkillCard from './SkillCard';
import AnimatedTabs from './ui/animated-tabs';

const TabContent = ({ category }) => {
  const filteredSkills = skills.filter((skill) => skill.category === category);

  return (
    <motion.div
      className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {filteredSkills.map((skill, index) => (
        <SkillCard key={skill.name} skill={skill} index={index} />
      ))}
    </motion.div>
  );
};

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { dictionary } = useDictionary();
  const { sectionTitle } = dictionary.Skills;

  const tabsCont = [
    {
      title: 'Frontend',
      content: <TabContent category="Frontend" />,
    },
    {
      title: 'Backend',
      content: <TabContent category="Backend" />,
    },
    {
      title: 'Programming',
      content: <TabContent category="Programming" />,
    },
    {
      title: 'Tools',
      content: <TabContent category="Tools" />,
    },
  ];

  return (
    <div ref={sectionRef} className="mb-14 lg:my-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="text-transparent bg-linear-to-r from-teal-500 to-blue-600 bg-clip-text">
              {sectionTitle}
            </span>
          </h2>
        </motion.div>
        <AnimatedTabs
          tabs={tabsCont}
          containerClassName="justify-start"
          activeTabClassName="bg-emerald-500 text-white"
          tabContentClassName="min-h-[600px] no-visible-scrollbar"
          tabClassName="px-3 md:px-4 lg:px-6 text-gray-600 dark:text-gray-300"
        />
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
