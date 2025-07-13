/* eslint-disable react/no-unescaped-entities */
'use client';

import testimonials from '@/constant/testimonials';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard from './TestimonialCard';

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
    <div className="relative mb-14 lg:my-16">
      <div className="container">
        <Swiper
          onSwiper={setSwiper}
          onSlideChange={handleSlideChange}
          spaceBetween={30}
          slidesPerView={1}
          loop={false}
          className="relative testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
          <div className="absolute z-50 flex justify-end gap-2 lg:mt-4 bottom-2 right-2 sm:bottom-4 sm:right-4 lg:bottom-10 lg:right-20">
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
