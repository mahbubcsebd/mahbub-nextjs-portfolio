// app/components/motion/Motion.jsx
'use client';

import { motion } from 'framer-motion';

// Div কম্পোনেন্ট
export const MotionDiv = ({ children, ...props }) => (
  <motion.div {...props}>{children}</motion.div>
);

// Span কম্পোনেন্ট
export const MotionSpan = ({ children, ...props }) => (
  <motion.span {...props}>{children}</motion.span>
);

// Section কম্পোনেন্ট
export const MotionSection = ({ children, ...props }) => (
  <motion.section {...props}>{children}</motion.section>
);

// Header কম্পোনেন্ট
export const MotionHeader = ({ children, ...props }) => (
  <motion.header {...props}>{children}</motion.header>
);

// Footer কম্পোনেন্ট
export const MotionFooter = ({ children, ...props }) => (
  <motion.footer {...props}>{children}</motion.footer>
);

// Main কম্পোনেন্ট
export const MotionMain = ({ children, ...props }) => (
  <motion.main {...props}>{children}</motion.main>
);

// Button কম্পোনেন্ট
export const MotionButton = ({ children, ...props }) => (
  <motion.button {...props}>{children}</motion.button>
);

// Image কম্পোনেন্ট
export const MotionImg = (props) => <motion.img {...props} />;

// Text কম্পোনেন্ট
export const MotionP = ({ children, ...props }) => (
  <motion.p {...props}>{children}</motion.p>
);

// Link কম্পোনেন্ট
export const MotionA = ({ children, ...props }) => (
  <motion.a {...props}>{children}</motion.a>
);

// Heading কম্পোনেন্টগুলো
export const MotionH1 = ({ children, ...props }) => (
  <motion.h1 {...props}>{children}</motion.h1>
);
export const MotionH2 = ({ children, ...props }) => (
  <motion.h2 {...props}>{children}</motion.h2>
);
export const MotionH3 = ({ children, ...props }) => (
  <motion.h3 {...props}>{children}</motion.h3>
);

// List কম্পোনেন্টগুলো
export const MotionUl = ({ children, ...props }) => (
  <motion.ul {...props}>{children}</motion.ul>
);
export const MotionOl = ({ children, ...props }) => (
  <motion.ol {...props}>{children}</motion.ol>
);
export const MotionLi = ({ children, ...props }) => (
  <motion.li {...props}>{children}</motion.li>
);

// Form কম্পোনেন্টগুলো
export const MotionForm = ({ children, ...props }) => (
  <motion.form {...props}>{children}</motion.form>
);
export const MotionInput = (props) => <motion.input {...props} />;
export const MotionTextarea = (props) => <motion.textarea {...props} />;
export const MotionLabel = ({ children, ...props }) => (
  <motion.label {...props}>{children}</motion.label>
);