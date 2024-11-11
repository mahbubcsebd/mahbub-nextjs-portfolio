import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => {
    return (
        <div className="text-2xl font-semibold text-pink-500">
            <Typewriter
                options={{
                    strings: [
                        'React JS Developer',
                        'Next.js Developer',
                        'MERN Stack Developer',
                        'Frontend Engineer',
                        'Full Stack Developer',
                    ],
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
