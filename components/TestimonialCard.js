/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Image from 'next/image';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="w-full">
      <Card className="text-gray-900 bg-white border-0 border-gray-200 backdrop-sepia-0 dark-text-white dark:bg-white/10 md:border">
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            {/* Image Section - Now centered and full width on mobile */}
            <div className="flex justify-center w-full md:w-1/3">
              <div className="w-24 h-24 overflow-hidden rounded-full md:w-full md:h-auto md:rounded-lg">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name}'s testimonial`}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full text-center md:text-left">
              <div className="flex justify-center gap-1 mb-2 md:justify-start">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 md:w-5 md:h-5 fill-yellow-400"
                  />
                ))}
              </div>
              <h3 className="mb-2 text-xl font-semibold md:text-2xl text-emerald-400">
                "{testimonial.quote}"
              </h3>
              <p className="mb-3 text-sm text-gray-500 dark:text-gray-300 md:mb-4 md:text-base">
                {testimonial.content}
              </p>
              <div>
                <p className="text-sm font-semibold text-gray-700 md:text-base dark:text-gray-300">
                  {testimonial.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 md:text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestimonialCard;
