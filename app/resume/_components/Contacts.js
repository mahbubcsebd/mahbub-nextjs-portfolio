import Link from 'next/link'
import { contactItems } from '../_constants'

const Contacts = () => {
  return (
    <div className="contact">
        <h2 className="flex items-center gap-2 mb-4 text-xl font-bold uppercase">
            <span className="w-6 h-[2px] bg-white inline-block"></span>
            Contact
        </h2>
        <ul className="grid gap-2">
            {contactItems.map((item, index) => (
                <li
                    key={index}
                    className="flex items-center gap-2 text-sm"
                >
                    <div>
                        <p className="flex items-center justify-center">
                            {item.icon}
                        </p>
                    </div>
                    <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item.value}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Contacts