import { skills } from '../_constants'

const Skills = () => {
  return (
    <div className="skill">
        <h2 className="flex items-center gap-2 mb-4 text-xl font-bold uppercase">
            <span className="w-6 h-[2px] bg-white inline-block"></span>
            Skills
        </h2>
        <ul className="grid gap-2">
            {skills.map((skill, index) => (
                <li
                    key={index}
                    className="flex items-center gap-2 text-sm"
                >
                    <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
                    {skill}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Skills