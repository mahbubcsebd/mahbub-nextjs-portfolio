import Image from "next/image";

const Sidebar = () => {
    return (
        <div className="w-[1.9in] bg-gray-100 p-6 text-sm text-gray-700">
            <div className="flex flex-col items-center mb-4">
                <div className="mb-3 overflow-hidden border-4 border-gray-900 rounded-full w-36 h-36">
                    {/* Profile Picture */}
                    <Image
                        src="your-profile-image.jpg"
                        alt="Profile"
                        className="w-full h-full grayscale"
                    />
                </div>
                <h1 className="text-lg font-semibold">Your Name</h1>
                <p className="text-xs text-gray-600">Your Position</p>
            </div>

            {/* Contact Information */}
            <div className="mt-4">
                <h2 className="text-sm font-semibold">Contact</h2>
                <ul className="mt-2 space-y-1">
                    <li>Email: you@example.com</li>
                    <li>Phone: (123) 456-7890</li>
                    <li>LinkedIn: linkedin.com/in/yourprofile</li>
                    {/* Add other contact details */}
                </ul>
            </div>

            {/* Skills Section */}
            <div className="mt-4">
                <h2 className="text-sm font-semibold">Skills</h2>
                <ul className="mt-2 list-disc list-inside">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>CSS & Tailwind</li>
                    {/* List other skills */}
                </ul>
            </div>
        </div>
    );
};

const MainContent = () => {
    return (
        <div className="w-[6.4in] p-6 text-sm">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-6">
                <div className="text-2xl font-bold">Resume Title</div>
                <div className="flex items-center space-x-2">
                    <span className="text-sm">QR Code</span>
                    <Image
                        src="your-qr-code.png"
                        alt="QR Code"
                        className="w-12 h-12"
                    />
                </div>
            </div>

            {/* Experience Section */}
            <section className="mb-8">
                <h2 className="mb-4 text-lg font-semibold">Experience</h2>
                <div className="space-y-4">
                    <div className="flex space-x-4">
                        <span className="w-24 text-right text-gray-500">
                            2020-2022
                        </span>
                        <div>
                            <h3 className="font-semibold">Job Title</h3>
                            <p className="text-xs text-gray-600">
                                Company Name - Location
                            </p>
                            <p className="mt-1">
                                Brief description of the role and achievements.
                            </p>
                        </div>
                    </div>
                    {/* Repeat for additional experience items */}
                </div>
            </section>

            {/* Education Section */}
            <section className="mb-8">
                <h2 className="mb-4 text-lg font-semibold">Education</h2>
                <div className="space-y-4">
                    <div className="flex space-x-4">
                        <span className="w-24 text-right text-gray-500">
                            2015-2019
                        </span>
                        <div>
                            <h3 className="font-semibold">Degree</h3>
                            <p className="text-xs text-gray-600">
                                University Name - Location
                            </p>
                            <p className="mt-1">
                                Relevant details or achievements during this
                                time.
                            </p>
                        </div>
                    </div>
                    {/* Repeat for additional education items */}
                </div>
            </section>

            {/* Certifications Section */}
            <section className="mb-8">
                <h2 className="mb-4 text-lg font-semibold">Certifications</h2>
                <ul className="list-disc list-inside">
                    <li>Certification Name - Issuer (Year)</li>
                    <li>Certification Name - Issuer (Year)</li>
                    {/* Add other certifications */}
                </ul>
            </section>
        </div>
    );
};

const ResumeTwo = () => {
    return (
        <div className="w-[8.3in] h-[11.7in] mx-auto bg-white text-gray-800 font-sans relative">
            <Sidebar />
            <MainContent />
        </div>
    );
};

export default ResumeTwo;
