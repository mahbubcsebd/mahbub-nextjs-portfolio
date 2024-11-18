'use client';

import Resume from '@/components/Resume';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const ResumePage = () => {
        const contentRef = useRef();

        const handlePrint = useReactToPrint({
            contentRef,
            documentTitle: 'Mahbubur Rahman (Resume)',
        });

    return (
        <div className="min-h-screen px-4 py-8 bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-end gap-4 mb-4">
                    <Button
                        onClick={handlePrint}
                        className="bg-blue-600 hover:bg-blue-700"
                    >
                        Download PDF
                    </Button>
                </div>

                <Card className="p-8 text-white bg-gray-800">
                    <div ref={contentRef} className="print-content">
                        <Resume />
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ResumePage;