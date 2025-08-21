import { skills } from './_constants';
import ResumeTitle from './ResumeTitle';

const Skills = () => {
  return (
    <div className="mb-6">
      <ResumeTitle className="text-slate-800">Skills</ResumeTitle>

      <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.category}>
            <h3 className="mb-1 text-sm font-semibold text-slate-700">
              {skill.category}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {skill.items.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
