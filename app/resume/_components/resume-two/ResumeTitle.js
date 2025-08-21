import { cn } from '@/lib/utils';

const ResumeTitle = ({ children, className }) => {
  return (
    <h2
      className={cn(
        'text-lg font-semibold text-[#062D5E] tracking-tight relative pb-3 mb-4',
        'border-b-2 border-slate-100',
        'after:content-[""] after:absolute after:bottom-[-2px] after:left-0',
        'after:w-16 after:h-[2px] after:bg-[#062D5E] after:rounded-full',
        className
      )}
    >
      {children}
    </h2>
  );
};

export default ResumeTitle;

// import { cn } from '@/lib/utils';

// const ResumeTitle = ({ children, className }) => {
//   return (
//     <div className={cn('flex items-center gap-3 mb-3', className)}>
//       <h2 className="text-lg font-semibold tracking-tight text-slate-800 whitespace-nowrap">
//         {children}
//       </h2>
//       <div className="flex-1 h-px bg-slate-300"></div>
//     </div>
//   );
// };

// export default ResumeTitle;
