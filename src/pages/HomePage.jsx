import React from 'react';
import { Helmet } from 'react-helmet';
import { businessDetails, jsonLd } from '@/config';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyUs from '@/components/sections/WhyUs';
import ContactSection from '@/components/sections/ContactSection';
import CTASection from '@/components/sections/CTASection';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>{businessDetails.name} - {businessDetails.tagline}</title>
                <meta name="description" content={`${businessDetails.name} delivers cutting-edge solutions in Cloud, AI/ML, Cyber Security, Web Development, and DevOps. Partner with us to engineer your future.`} />
                <meta name="keywords" content="Cloud Solutions, AI, Machine Learning, Cyber Security, Web Development, DevOps, Tech Solutions, Hyderabad" />
                <meta name="author" content={businessDetails.name} />
                <meta property="og:title" content={`${businessDetails.name} - Engineering the Future`} />
                <meta property="og:description" content="Pioneering advanced technology solutions to drive business innovation and growth." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.eleventechsolutions.in/" />
                <meta property="og:image" content="https://www.eleventechsolutions.in/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${businessDetails.name} - Engineering the Future`} />
                <meta name="twitter:description" content="Pioneering advanced technology solutions to drive business innovation and growth." />
                <meta name="twitter:image" content="https://www.eleventechsolutions.in/twitter-image.jpg" />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>
            <div className="architectural-grid">
                <Hero />
                <AboutSection />
                <ServicesSection />
                <WhyUs />
                <CTASection />
                <ContactSection />
            </div>
        </>
    );
};

export default HomePage;