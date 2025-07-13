'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function AnimatedTabs({
  tabs,
  containerClassName,
  activeTabClassName,
  tabContentClassName,
  tabClassName,
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);

  const contentVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 20 : -20,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    const newPage = activeIdx + newDirection;
    if (newPage >= 0 && newPage < tabs.length) {
      setPage([newPage, newDirection]);
      setActiveIdx(newPage);
    }
  };

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div
        className={cn(
          'relative flex flex-wrap items-center justify-center',
          containerClassName
        )}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            onClick={() => {
              const direction = index > activeIdx ? 1 : -1;
              setPage([index, direction]);
              setActiveIdx(index);
            }}
            className={cn(
              'group relative z-1 rounded-full px-2 py-1 lg:px-4 lg:py-2',
              { 'z-0': activeIdx === index },
              tabClassName
            )}
          >
            {activeIdx === index && (
              <motion.div
                layoutId="clicked-button"
                transition={{ duration: 0.2 }}
                className={cn(
                  'absolute inset-0 rounded-full bg-black dark:bg-white',
                  activeTabClassName
                )}
              />
            )}
            <span
              className={cn(
                'relative text-sm block font-medium duration-200',
                activeIdx === index
                  ? 'text-white dark:text-black delay-100'
                  : 'text-black dark:text-white'
              )}
            >
              {tab.title}
            </span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={cn('relative mt-6 overflow-hidden', tabContentClassName)}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full"
          >
            <div className="py-4 rounded-lg">{tabs[activeIdx].content}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
