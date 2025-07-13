/* eslint-disable react/no-unescaped-entities */
'use client';

const CodePreview = () => {
  return (
    <div className="max-w-2xl mx-auto overflow-hidden bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800">
      {/* Window Controls */}
      <div className="flex items-center px-4 py-3 bg-gray-200 dark:bg-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="ml-4 text-xs text-gray-600 dark:text-gray-300">
          person.js
        </div>
      </div>

      {/* Code Content */}
      <div className="p-4 font-mono text-sm bg-[#f4f4f4] dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <div className="text-purple-600 dark:text-purple-400">const</div> coder
        = {'{'}
        <div className="ml-4">
          <div>
            <span className="text-blue-600 dark:text-blue-400">name</span>:
            <span className="text-green-600 dark:text-green-400">
              {' '}
              'Mahbubur Rahman'
            </span>
            ,
          </div>
          <div>
            <span className="text-blue-600 dark:text-blue-400">skills</span>:
            <span className="text-yellow-600 dark:text-yellow-400">
              {' '}
              ['React', 'Node']
            </span>
            ,
          </div>
          <div>
            <span className="text-blue-600 dark:text-blue-400">hardWorker</span>
            :<span className="text-purple-600 dark:text-purple-400"> true</span>
            ,
          </div>
          <div>
            <span className="text-blue-600 dark:text-blue-400">
              problemSolver
            </span>
            :<span className="text-purple-600 dark:text-purple-400"> true</span>
            ,
          </div>
          <div className="text-purple-600 dark:text-purple-400">hireable</div>:
          <span className="text-purple-600 dark:text-purple-400">
            {' '}
            function
          </span>
          () {'{'}
          <div className="ml-4">
            <span className="text-purple-600 dark:text-purple-400">return</span>{' '}
            (
            <div className="ml-4">
              <span className="text-gray-600 dark:text-gray-400">this.</span>
              <span className="text-blue-600 dark:text-blue-400">
                hardWorker
              </span>{' '}
              &&
              <br />
              <span className="text-gray-600 dark:text-gray-400">this.</span>
              <span className="text-blue-600 dark:text-blue-400">
                problemSolver
              </span>{' '}
              &&
              <br />
              <span className="text-gray-600 dark:text-gray-400">this.</span>
              <span className="text-blue-600 dark:text-blue-400">skills</span>.
              <span className="text-blue-600 dark:text-blue-400">length</span>{' '}
              {'>='} 5
            </div>
            );
          </div>
          {'}'}
        </div>
        {'}'}
      </div>
    </div>
  );
};

export default CodePreview;
