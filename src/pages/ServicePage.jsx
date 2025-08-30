import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { services, businessDetails } from '@/config';
import { ArrowLeft } from 'lucide-react';

const ServicePage = () => {
    const { serviceId } = useParams();
    const service = services.find(s => s.id === serviceId);

    if (!service) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <Helmet>
                <title>{service.title} - {businessDetails.name}</title>
                <meta name="description" content={service.details} />
            </Helmet>
            <div className="py-24 sm:py-32 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link to="/#services" className="flex items-center space-x-2 text-gray-500 hover:text-black transition-colors group mb-8">
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-medium">Back to Services</span>
                        </Link>
                        
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                            {service.title}
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {service.details}
                        </p>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default ServicePage;