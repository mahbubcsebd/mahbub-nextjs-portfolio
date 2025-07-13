import useDictionary from '@/hooks/useDictionary';
import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => {
  const { dictionary } = useDictionary();

  const { react, nextjs, nodejs, mern, frontend } = dictionary.HeroSection;
  return (
    <div className="text-2xl font-semibold text-pink-500">
      <Typewriter
        options={{
          strings: [react, nextjs, nodejs, mern, frontend],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
