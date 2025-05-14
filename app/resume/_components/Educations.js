import Link from 'next/link'
import { educations } from '../_constants'

const Educations = () => {
  return (
    <div className="mb-8">
        <h2 className="pb-2 mb-4 text-2xl font-semibold border-b-2 border-gray-300">
            Education
        </h2>
        <div className="relative border-l-2 border-yellow-400">
            {educations.map((education) => (
                <div
                    key={education.id}
                    className="flex flex-col mb-5 ml-5"
                >
                    <div className="absolute left-[-10px] h-4 w-4 bg-yellow-400 border-2 border-yellow-400 rounded-full"></div>
                    <p className="text-sm text-gray-500">
                        {education.duration}
                    </p>
                    <Link
                        href={education.url}
                        className="mt-1 text-base font-semibold text-gray-800"
                        target="_blank"
                    >
                        {education.institution}
                    </Link>
                    <p className="text-xs font-normal text-gray-500">
                        {education.degree}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Educations