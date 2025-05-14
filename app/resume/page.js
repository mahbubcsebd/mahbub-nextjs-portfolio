'use client';

import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Resume from '../../components/Resume';

const ResumePage = () => {
        const contentRef = useRef();

        const handlePrint = useReactToPrint({
            contentRef,
            documentTitle: 'Mahbubur Rahman (Resume)',
        });

    return (
        <div className="min-h-screen">
            <div className="max-w-4xl mx-auto">
                <div className="border border-gray-700 ">
                    <div
                        ref={contentRef}
                        className="print-content"
                    >
                        <Resume handlePrint={handlePrint} />
                    </div>
                </div>
                {/* <div className="flex justify-end gap-4 mb-4">
                    <Button
                        onClick={handlePrint}
                        className="bg-blue-600 hover:bg-blue-700"
                    >
                        Download PDF
                    </Button>
                </div> */}
            </div>
        </div>
    );
};

export default ResumePage;