import { experiences } from './_constants';
import ResumeTitle from './ResumeTitle';

const Experiences = () => {
  return (
    <div className="experience-section">
      <div className="mb-6">
        <ResumeTitle className="text-slate-800">
          Professional Experience
        </ResumeTitle>

        <ul className="grid gap-6">
          {experiences.map((experience) => (
            <li key={experience.id}>
              <div className="single-experience mb-3">
                {/* Header: Company and Role */}
                <div className="flex justify-between items-center mb-1 flex-wrap gap-y-1">
                  <h3 className="text-base font-semibold text-slate-700">
                    {experience.company}
                    <span className="ml-2 text-sm font-normal text-slate-500">
                      – {experience.role}
                    </span>
                  </h3>
                  <p className="text-sm text-slate-500">
                    {experience.duration}
                  </p>
                </div>

                {/* Bullet List */}
                <ul className="grid gap-2 mt-2 text-slate-600">
                  {experience.descriptions.map((description, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-slate-400 text-xs mt-1 flex-shrink-0">
                        •
                      </span>
                      <span className="text-[13px] text-slate-600 leading-relaxed">
                        {description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
