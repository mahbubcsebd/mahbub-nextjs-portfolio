/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';

const CodePreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gray-900 rounded-lg shadow-2xl"
    >
      {/* Window Controls */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700 bg-gray-800/50">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      {/* Code Content */}
      <div className="p-6 space-y-1 font-mono text-sm leading-relaxed text-gray-300">
        <div><span className="text-purple-400">const</span> <span className="text-white">coder</span> = <span className="text-yellow-300">{'{'}</span></div>
        <div className="pl-4"><span className="text-cyan-300">name:</span> <span className="text-orange-300">'Mahbubur Rahman'</span>,</div>
        <div className="pl-4"><span className="text-cyan-300">skills:</span> <span className="text-yellow-300">['<span className="text-orange-300">React</span>', '<span className="text-orange-300">Node</span>']</span>,</div>
        <div className="pl-4"><span className="text-cyan-300">hardWorker:</span> <span className="text-purple-400">true</span>,</div>
        <div className="pl-4"><span className="text-cyan-300">problemSolver:</span> <span className="text-purple-400">true</span>,</div>
        <div className="pl-4"><span className="text-emerald-400">hireable:</span> <span className="text-purple-400">function</span>() {'{'}</div>
        <div className="pl-8"><span className="text-purple-400">return</span> (</div>
        <div className="pl-12"><span className="text-cyan-300">this</span>.hardWorker &&</div>
        <div className="pl-12"><span className="text-cyan-300">this</span>.problemSolver &&</div>
        <div className="pl-12"><span className="text-cyan-300">this</span>.skills.length {'>='} 5</div>
        <div className="pl-8">);</div>
        <div className="pl-4">{'}'}</div>
        <div className="text-yellow-300">{'}'}</div>
      </div>
    </motion.div>
  );
};

export default CodePreview;
