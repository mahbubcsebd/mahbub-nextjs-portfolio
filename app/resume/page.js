'use client';

import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Resume from './_components/resume-two/Resume';

const ResumePage = () => {
  const contentRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: 'Mahbubur Rahman (Resume)',
  });

  return (
    <div className="min-h-screen bg-[#0a0e1f]">
      <div className="max-w-4xl mx-auto md:py-10">
        <div className="border border-gray-700 ">
          <div ref={contentRef} className="">
            <Resume handlePrint={handlePrint} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
