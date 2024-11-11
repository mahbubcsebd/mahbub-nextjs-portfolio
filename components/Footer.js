import {
    Facebook,
    Instagram,
    Linkedin,
    Music,
    Twitter,
    Youtube,
} from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: <Youtube className="w-5 h-5" />, href: '#' },
        { icon: <Twitter className="w-5 h-5" />, href: '#' },
        { icon: <Facebook className="w-5 h-5" />, href: '#' },
        { icon: <Linkedin className="w-5 h-5" />, href: '#' },
        { icon: <Instagram className="w-5 h-5" />, href: '#' },
        { icon: <Music className="w-5 h-5" />, href: '#' },
    ];

    return (
        <footer className="w-full border-t border-zinc-800 py-6">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="text-zinc-500 text-sm">
                        ©All rights reserved by <span className='text-semibold'>Mahbub</span>
                    </span>
                    <div className="flex items-center gap-6">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                className="text-zinc-500 hover:text-white transition-colors"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
