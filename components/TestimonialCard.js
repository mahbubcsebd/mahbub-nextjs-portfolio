/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Image from 'next/image';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div>
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
                                {[...Array(testimonial.rating)].map((_, i) => (
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
        </div>
    );
};

export default TestimonialCard;
