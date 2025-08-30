import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Users, BrainCircuit } from 'lucide-react';

const stats = [
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Projects Completed' },
    { value: '100%', label: 'On-Time Delivery' }
];

const differentiators = [
    { icon: <Zap size={24} className="text-black" />, title: 'Agile & Fast', description: 'We adapt quickly to deliver high-quality solutions with speed and precision.' },
    { icon: <Users size={24} className="text-black" />, title: 'Client-Centric', description: 'Your success is our priority. We build partnerships based on trust and transparency.' },
    { icon: <BrainCircuit size={24} className="text-black" />, title: 'Expert Team', description: 'Our engineers are masters of their craft, dedicated to solving complex problems.' }
];

const processSteps = [
    'Discovery & Strategy',
    'Design & Prototyping',
    'Development & Testing',
    'Deployment & Support'
];

const WhyUs = () => {
    return (
        <section id="why-us" className="py-24 sm:py-32 px-6 bg-gray-50/50 texture-overlay">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Why Partner With Us?</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
                        We deliver not just products, but powerful solutions that create lasting value through a combination of deep technical expertise, client-centric focus, and a relentless commitment to innovation.
                    </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 rounded-lg border border-gray-200/80 text-center shadow-md card-border-glow"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-5xl font-black text-black">{stat.value}</span>
                            <p className="text-gray-500 mt-2">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {differentiators.map((item, index) => (
                         <motion.div
                            key={index}
                            className="bg-white p-8 rounded-lg border border-gray-200/80 shadow-md card-border-glow corner-accent text-black"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                {item.icon}
                                <h3 className="text-xl font-bold">{item.title}</h3>
                            </div>
                            <p className="text-gray-600">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold tracking-tighter mb-8">Our Process Excellence</h3>
                     <div className="relative flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 hidden md:block"></div>
                        {processSteps.map((step, index) => (
                            <div key={index} className="relative flex flex-col items-center mb-8 md:mb-0 z-10">
                                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg border-4 border-gray-50">
                                    {index + 1}
                                </div>
                                <p className="mt-4 text-sm font-medium text-center w-32">{step}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default WhyUs;