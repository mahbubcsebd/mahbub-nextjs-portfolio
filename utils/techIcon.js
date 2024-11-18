import BootstrapIcon from '@/assets/icons/bootstrap.svg';
import CssIcon from '@/assets/icons/css.svg';
import HtmlIcon from '@/assets/icons/html.svg';
import JavaScriptIcon from '@/assets/icons/javascript.svg';
import JqueryIcon from '@/assets/icons/jquery.svg';
import NextjsIcon from '@/assets/icons/nextjs.svg';
import NuxtjsIcon from '@/assets/icons/nuxtjs.svg';
import ReactIcon from '@/assets/icons/react.svg';
import TailwindIcon from '@/assets/icons/tailwind.svg';
import VueIcon from '@/assets/icons/vue.svg';

const getTechIcon = (tech) => {
    switch (tech) {
        case 'html':
            return HtmlIcon;
        case 'react':
            return ReactIcon;
        case 'css':
            return CssIcon;
        case 'vue':
            return VueIcon;
        case 'bootstrap':
            return BootstrapIcon;
        case 'tailwind':
            return TailwindIcon;
        case 'nextjs':
            return NextjsIcon;
        case 'nuxtjs':
            return NuxtjsIcon;
        case 'jquery':
            return JqueryIcon;
        case 'javascript':
            return JavaScriptIcon;
        default:
            return 'bg-gray-500';
    }

    return (
        <div
            className={`w-8 h-8 rounded-full ${getIconClass(
                tech
            )} flex items-center justify-center`}
        >
            <span className="text-xs text-white">
                {tech.charAt(0).toUpperCase()}
            </span>
        </div>
    );
};

export default getTechIcon;
