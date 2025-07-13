'use client';
import useDictionary from '@/hooks/useDictionary';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const { dictionary } = useDictionary();

  const { allRights, name } = dictionary.Footer;
  const socialLinks = [
    // { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: 'https://x.com/mahbubcseme',
      label: 'Twitter',
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: 'https://www.facebook.com/mahbubcsebd',
      label: 'Facebook',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/mahbubcseme',
      label: 'LinkedIn',
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://www.instagram.com/mahbubcseme/',
      label: 'Instagram',
    },
    // { icon: <Music className="w-5 h-5" />, href: '#', label: 'Music' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full py-6 bg-white border-t border-gray-300 dark:bg-transparent dark:border-zinc-800"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <span className="text-sm text-center text-zinc-500 md:text-left">
            © {allRights}{' '}
            <span className="font-semibold text-gray-800 dark:text-white">
              {name}
            </span>
          </span>
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="transition-colors text-zinc-500 hover:zinc-800 dark:hover:text-white"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
