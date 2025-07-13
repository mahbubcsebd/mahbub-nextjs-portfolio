import Link from 'next/link';
import { educations } from './_constants';
import ResumeTitle from './ResumeTitle';

const Educations = () => {
  return (
    <div className="mb-6">
      <ResumeTitle className="text-slate-800">Education</ResumeTitle>

      <div className="space-y-5 mt-4">
        {educations.map((education) => (
          <div
            key={education.id}
            className="flex justify-between items-start flex-wrap gap-2"
          >
            <div>
              <Link
                href={education.url}
                className="text-base font-semibold text-slate-700 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {education.institution}
              </Link>
              <p className="text-sm text-slate-500">{education.degree}</p>
            </div>

            <p className="text-sm text-slate-500">{education.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Educations;
