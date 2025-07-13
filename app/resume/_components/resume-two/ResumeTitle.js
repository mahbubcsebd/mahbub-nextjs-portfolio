import { cn } from '@/lib/utils';

const ResumeTitle = ({ children, className }) => {
  return (
    <h2
      className={cn(
        'text-lg font-semibold text-[#062D5E] tracking-tight border-b border-slate-300 pb-2 mb-2',
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
//       <h2 className="text-lg font-semibold text-slate-800 tracking-tight whitespace-nowrap">
//         {children}
//       </h2>
//       <div className="flex-1 h-px bg-slate-300"></div>
//     </div>
//   );
// };

// export default ResumeTitle;
