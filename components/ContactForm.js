/* eslint-disable react/no-unescaped-entities */
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const formSchema = z.object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email'),
    phone: z.string().min(2, 'Please enter a valid phone number'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const form = useRef();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        try {
            const result = await emailjs.sendForm(
                serviceId,
                templateId,
                form.current,
                {
                    publicKey: publicKey,
                }
            );

            console.log('SUCCESS!', result.text);
            setIsSubmitted(true);
            reset();
        } catch (error) {
            console.log('FAILED...', error);
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setIsSubmitted(false), 3000);
        }
    };


    return (
        <div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Card className="border-gray-700 bg-gray-800/50 backdrop-blur">
                    <CardContent className="p-6">
                        <form
                            ref={form}
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <Input
                                        {...register('firstName')}
                                        name="firstName"
                                        placeholder="First name"
                                        className={`bg-gray-700/50 border-gray-600 text-white ${
                                            errors.firstName
                                                ? 'border-red-500'
                                                : ''
                                        }`}
                                    />
                                    {errors.firstName && (
                                        <motion.p
                                            initial={{
                                                opacity: 0,
                                                y: -10,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            className="mt-1 text-sm text-red-500"
                                        >
                                            {errors.firstName.message}
                                        </motion.p>
                                    )}
                                </div>

                                <div>
                                    <Input
                                        {...register('lastName')}
                                        name="lastName"
                                        placeholder="Last name"
                                        className={`bg-gray-700/50 border-gray-600 text-white ${
                                            errors.lastName
                                                ? 'border-red-500'
                                                : ''
                                        }`}
                                    />
                                    {errors.lastName && (
                                        <motion.p
                                            initial={{
                                                opacity: 0,
                                                y: -10,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            className="mt-1 text-sm text-red-500"
                                        >
                                            {errors.lastName.message}
                                        </motion.p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <Input
                                    {...register('email')}
                                    name="email"
                                    type="email"
                                    placeholder="youmail@domain.com"
                                    className={`bg-gray-700/50 border-gray-600 text-white ${
                                        errors.email ? 'border-red-500' : ''
                                    }`}
                                />
                                {errors.email && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-1 text-sm text-red-500"
                                    >
                                        {errors.email.message}
                                    </motion.p>
                                )}
                            </div>

                            <div>
                                <Input
                                    {...register('phone')}
                                    name="phone"
                                    placeholder="+1 (555) 000-0000"
                                    className={`bg-gray-700/50 border-gray-600 text-white ${
                                        errors.phone ? 'border-red-500' : ''
                                    }`}
                                />
                                {errors.phone && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-1 text-sm text-red-500"
                                    >
                                        {errors.phone.message}
                                    </motion.p>
                                )}
                            </div>

                            <div>
                                <Textarea
                                    {...register('message')}
                                    name="message"
                                    placeholder="Leave us a message..."
                                    className={`bg-gray-700/50 border-gray-600 text-white h-32 ${
                                        errors.message ? 'border-red-500' : ''
                                    }`}
                                />
                                {errors.message && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-1 text-sm text-red-500"
                                    >
                                        {errors.message.message}
                                    </motion.p>
                                )}
                            </div>

                            <Button
                                type="submit"
                                className="w-full text-white bg-emerald-500 hover:bg-emerald-600"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>

                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="text-center text-emerald-500"
                                >
                                    Message sent successfully!
                                </motion.div>
                            )}
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
};

export default ContactForm;
