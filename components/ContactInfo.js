/* eslint-disable react/no-unescaped-entities */
'use client';

import useDictionary from '@/hooks/useDictionary';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon } from 'lucide-react';

const ContactInfo = () => {
  const { dictionary } = useDictionary();
  const { getInTouch, openDiscussion, description, callNow, email } =
    dictionary.Contact;

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
          {getInTouch}
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4 text-4xl font-bold text-white md:text-5xl"
        >
          {openDiscussion}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-400"
        >
          {description}
        </motion.p>
      </div>

      <div className="space-y-6">
        {/* Phone Link */}
        <motion.a
          href="tel:+8801886225492"
          className="flex items-center space-x-4 cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="p-4 bg-purple-600 rounded-full">
            <PhoneIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-medium text-white">{callNow}</h3>
            <p className="text-gray-400">+880 188622 5492</p>
          </div>
        </motion.a>

        {/* Email Link */}
        <motion.a
          href="mailto:mahbub.cse.me@gmail.com"
          className="flex items-center space-x-4 cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="p-4 bg-purple-600 rounded-full">
            <MailIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-medium text-white">{email}</h3>
            <p className="text-gray-400">mahbub.cse.me@gmail.com</p>
          </div>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
