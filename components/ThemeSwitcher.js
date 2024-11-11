// 'use client';

// import { Moon, Sun } from 'lucide-react';
// import { useTheme } from 'next-themes';

// import { Button } from '@/components/ui/button';
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';

// export default function ThemeSwitcher() {
//     const { setTheme } = useTheme();

//     return (
//         <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//                 <Button
//                     variant="outline"
//                     size="icon"
//                 >
//                     <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//                     <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//                     <span className="sr-only">Toggle theme</span>
//                 </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//                 <DropdownMenuItem onClick={() => setTheme('light')}>
//                     Light
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => setTheme('dark')}>
//                     Dark
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => setTheme('system')}>
//                     System
//                 </DropdownMenuItem>
//             </DropdownMenuContent>
//         </DropdownMenu>
//     );
// }

'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
    const { setTheme, theme } = useTheme();

    const handleToggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    };

    return (
        <button
            type="button"
            onClick={handleToggleTheme}
            className="text-zinc-400 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"
        >
            {theme === 'dark' ? <Sun /> : <Moon />}
            {/* Sun icon for light mode, Moon icon for dark mode */}
            {/* <Sun
                className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ${
                    theme === 'dark' ? 'opacity-0' : ''
                }`}
            />
            <Moon
                className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${
                    theme === 'light' ? 'opacity-0' : ''
                }`}
            /> */}
        </button>
    );
}
