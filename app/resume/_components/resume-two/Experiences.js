import Link from 'next/link';
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
              <div className="mb-3 single-experience">
                {/* Header: Company and Role */}
                <div className="flex flex-wrap items-center justify-between mb-1 gap-y-1">
                  <Link
                    href={experience.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-slate-700"
                  >
                    {experience.company}
                    <span className="ml-2 text-sm font-normal text-slate-500">
                      – {experience.role}
                    </span>
                  </Link>
                  <p className="text-sm text-slate-500">
                    {experience.duration}
                  </p>
                </div>

                {/* Bullet List */}
                <ul className="grid gap-2 mt-2 text-slate-600">
                  {experience.descriptions.map((description, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1 text-xs text-slate-400">
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
