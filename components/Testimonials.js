/* eslint-disable react/no-unescaped-entities */
'use client';

import TestimonialImage1 from '@/assets/images/testimonial-1.png';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

const testimonials = [
    {
        id: 1,
        name: 'Robert R. White',
        role: 'Artisan Shop Owner',
        quote: 'Innovation and excellence in development',
        content:
            'Tech websites need elegance and innovation for reputation and investment. Clean UI, modern design, and great performance from these folks. They solved problems and understood frameworks well. User activity surged! Strongly recommend.',
        rating: 5,
        image: TestimonialImage1,
    },
    {
        id: 2,
        name: 'Robert R. White',
        role: 'Artisan Shop Owner',
        quote: 'Innovation and excellence in development',
        content:
            'Tech websites need elegance and innovation for reputation and investment. Clean UI, modern design, and great performance from these folks. They solved problems and understood frameworks well. User activity surged! Strongly recommend.',
        rating: 5,
        image: TestimonialImage1,
    },
    {
        id: 3,
        name: 'Robert R. White',
        role: 'Artisan Shop Owner',
        quote: 'Innovation and excellence in development',
        content:
            'Tech websites need elegance and innovation for reputation and investment. Clean UI, modern design, and great performance from these folks. They solved problems and understood frameworks well. User activity surged! Strongly recommend.',
        rating: 5,
        image: TestimonialImage1,
    },
];

const TestimonialSlider = () => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [swiper, setSwiper] = useState(null);

    const handleSlideChange = () => {
        if (swiper) {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        }
    };

    return (
        <div className="relative py-16">
            <div className="container">
                <Swiper
                    onSwiper={setSwiper}
                    onSlideChange={handleSlideChange}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={false}
                    className="testimonial-swiper relative"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <Card className="text-white backdrop-sepia-0 bg-white/10">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-6">
                                        <div className="w-1/3">
                                            <Image
                                                src={testimonial.image}
                                                alt={`${testimonial.name}'s testimonial`}
                                                className="w-full h-auto rounded-lg"
                                            />
                                        </div>
                                        <div className="">
                                            <div className="flex gap-1 mb-2">
                                                {[
                                                    ...Array(
                                                        testimonial.rating
                                                    ),
                                                ].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                                                    />
                                                ))}
                                            </div>
                                            <h3 className="mb-2 text-2xl font-semibold text-emerald-400">
                                                "{testimonial.quote}"
                                            </h3>
                                            <p className="mb-4 text-gray-300">
                                                {testimonial.content}
                                            </p>
                                            <div>
                                                <p className="font-semibold">
                                                    {testimonial.name}
                                                </p>
                                                <p className="text-gray-400">
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    ))}
                    <div className="flex justify-end gap-2 mt-4 absolute bottom-10 right-20 z-50">
                        <button
                            onClick={() => swiper?.slidePrev()}
                            disabled={isBeginning}
                            className={`w-10 h-8 rounded-lg p-2 transition-colors border border-gray-700 flex justify-center items-center
                                ${
                                    isBeginning
                                        ? 'opacity-50 cursor-not-allowed'
                                        : 'hover:bg-gray-800'
                                }`}
                        >
                            ←
                        </button>
                        <button
                            onClick={() => swiper?.slideNext()}
                            disabled={isEnd}
                            className={`w-10 h-8 rounded-lg p-2 transition-colors border border-gray-700 flex justify-center items-center
                                ${
                                    isEnd
                                        ? 'opacity-50 cursor-not-allowed'
                                        : 'hover:bg-gray-800'
                                }`}
                        >
                            →
                        </button>
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default TestimonialSlider;
