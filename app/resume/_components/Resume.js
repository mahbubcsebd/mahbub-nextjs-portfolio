import Contacts from './Contacts';
import Download from './Download';
import Educations from './Educations';
import Experiences from './Experiences';
import Header from './Header';
import ProfilePicture from './ProfilePicture';
import Projects from './Projects';
import Skills from './Skills';

const Resume = ({ handlePrint }) => {
    return (
        <div className="text-black">
            <div className="grid min-h-screen grid-cols-12">
                <div className="h-full col-span-4 bg-yellow-400">
                    <div className="flex justify-center mb-10 bg-gray-400">
                        <ProfilePicture />
                    </div>
                    <div className="px-6 pb-10 space-y-6 sidebar-content">
                        <Contacts />
                        <Skills />
                        <Download handlePrint={handlePrint} />
                    </div>
                </div>
                <div className="h-full col-span-8 bg-gray-200">
                    <Header />
                    <div className="px-6 pt-5 pb-10 resume-content">
                        <Experiences />
                        <Projects />
                        <Educations />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
