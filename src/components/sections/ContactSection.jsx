import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { businessDetails } from '@/config';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

const ContactSection = () => {
    const form = useRef();
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.sendForm('service_qj9mn8b', 'template_i9d7btn', form.current, 'o5-Ex7Owap4zrChOM')
            .then((result) => {
                toast({
                    title: "Message Sent!",
                    description: "Thank you for reaching out. We'll get back to you shortly.",
                });
                form.current.reset();
            }, (error) => {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem with your request. Please try again.",
                });
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <section id="contact" className="py-24 sm:py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Get In Touch</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Have a project in mind or just want to say hello? We'd love to hear from you.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                         <div className="space-y-3">
                            <h3 className="text-xl font-bold">Contact Information</h3>
                            <p className="text-gray-600">Reach out to us via email or phone, or visit our office.</p>
                            <a href={`mailto:${businessDetails.email}`} className="block text-gray-800 sophisticated-underline hover:text-black">{businessDetails.email}</a>
                            <a href={`tel:${businessDetails.phone.replace(/\s/g, '')}`} className="block text-gray-800 sophisticated-underline hover:text-black">{businessDetails.phone}</a>
                            <p className="text-gray-600">{businessDetails.address}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="from_name" className="text-sm font-medium">Full Name</label>
                                <input type="text" name="from_name" id="from_name" required className="w-full px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-ring focus:outline-none" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="from_email" className="text-sm font-medium">Email Address</label>
                                <input type="email" name="from_email" id="from_email" required className="w-full px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-ring focus:outline-none" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <input type="text" name="subject" id="subject" required className="w-full px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-ring focus:outline-none" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea name="message" id="message" required rows="5" className="w-full px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-ring focus:outline-none"></textarea>
                            </div>
                             <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send Us a Message"
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;