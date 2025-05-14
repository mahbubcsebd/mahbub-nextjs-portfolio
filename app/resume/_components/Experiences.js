import Link from 'next/link'
import { experiences } from '../_constants'

const Experiences = () => {
  return (
    <div className="mb-8">
        <h2 className="pb-2 mb-4 text-2xl font-semibold border-b-2 border-gray-300">
            Experience
        </h2>
        <div className="relative border-l-2 border-yellow-400">
            {experiences.map((experience) => (
                <div
                    key={experience.id}
                    className="flex flex-col mb-5 ml-5"
                >
                    <div className="absolute left-[-10px] h-4 w-4 bg-yellow-400 border-2 border-yellow-400 rounded-full"></div>
                    <p className="text-sm text-gray-500">
                        {experience.duration}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-gray-800">
                        {experience.role} -{' '}
                        <Link
                            href={experience.url}
                            className="font-normal"
                            target="_blank"
                        >
                            {experience.company}
                        </Link>
                    </h3>
                    <ul className="grid gap-2 mt-2 text-gray-700 whitespace-pre-line">
                        {experience.descriptions.map(
                            (description, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-1 text-xs"
                                >
                                    <p className="inline-block">
                                        <span className="inline-block w-[6px] h-[6px] bg-black rounded-full"></span>
                                    </p>
                                    {description}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experiences