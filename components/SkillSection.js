'use client';

import skills from '@/constant/skills';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SkillCard from './SkillCard';



const SkillsSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <div
            ref={sectionRef}
            className="py-16"
        >
            <div className="container">
                <div className="">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.6 }}
                        className="mb-16 text-center"
                    >
                        <h2 className="mb-2 text-2xl font-medium text-emerald-400">
                            My Expertise & Skills
                        </h2>
                        <div className="w-20 h-1 mx-auto rounded-full bg-emerald-400" />
                    </motion.div>

                    <motion.div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
                        {skills.map((skill, index) => (
                            <SkillCard
                                key={skill.name}
                                skill={skill}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
