import Experiences from '../resume-two/Experiences';
import AboutMe from './AboutMe';
import Download from './Download';
import Educations from './Educations';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';

const Resume = ({ handlePrint }) => {
  return (
    <div className="px-10 py-6 bg-white print:px-0 print:py-0">
      <Header />
      <AboutMe />
      <Skills />
      <Experiences />
      <Projects />
      <Educations />
      {/* <Contacts /> */}
      <Download handlePrint={handlePrint} />
    </div>
  );
};

export default Resume;
