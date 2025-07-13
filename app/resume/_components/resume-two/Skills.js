import { skills } from './_constants';
import ResumeTitle from './ResumeTitle';

const Skills = () => {
  return (
    <div className="mb-6">
      <ResumeTitle className="text-slate-800">Skills</ResumeTitle>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mt-4">
        {skills.map((skill) => (
          <div key={skill.category}>
            <h3 className="text-sm font-semibold text-slate-700 mb-1">
              {skill.category}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {skill.items.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
