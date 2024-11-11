import AboutSection from '@/components/AboutSection';
import BlogSections from '@/components/BlogSections';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LoveToDoSection from '@/components/LoveToDoSection';
import Project from '@/components/Project';
import SkillsSection from '@/components/SkillSection';
import TestimonialSlider from '@/components/Testimonials';

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <SkillsSection />
            <AboutSection />
            <Project />
            <TestimonialSlider />
            <ContactSection />
            <LoveToDoSection />
            <BlogSections />
            <Footer />
        </>
    );
};

export default Home;
