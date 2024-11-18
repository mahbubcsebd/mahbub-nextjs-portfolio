/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon } from 'lucide-react';

const ContactInfo = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
        >
            <div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-2 text-lg font-medium text-purple-500"
                >
                    Get In Touch
                </motion.h2>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-4 text-4xl font-bold text-white md:text-5xl"
                >
                    I'm Always Open To Discussing
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-gray-400"
                >
                    Let's have a chat, tell me about your project and I'll give
                    you some suggestions
                </motion.p>
            </div>

            <div className="space-y-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center space-x-4"
                >
                    <div className="p-4 bg-purple-600 rounded-full">
                        <PhoneIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-medium text-white">Call Now</h3>
                        <p className="text-gray-400">+1 234 567 8900</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center space-x-4"
                >
                    <div className="p-4 bg-purple-600 rounded-full">
                        <MailIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-medium text-white">Email</h3>
                        <p className="text-gray-400">youmail@domain.com</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ContactInfo;
