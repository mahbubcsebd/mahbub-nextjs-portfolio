// app/components/AboutSection.tsx

import dynamic from 'next/dynamic';

const AboutAnimated = dynamic(() => import('./AboutAnimated'), {
  ssr: true,
  loading: () => (
    <div className="h-[500px] flex items-center justify-center text-gray-400">
      Loading...
    </div>
  ),
});

export default function AboutSection() {
  return (
    <div id="about" className="relative mb-14 lg:my-16">
      <div className="container">
        <AboutAnimated />
      </div>
    </div>
  );
}
