import React from 'react';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import Hero from '../Hero.js/Hero';
import CertificatesCarousel from './CertificatesCarousel';
import ServiceCard from './ServiceCard';

const Home = () => {
    return (
        <>
            <Hero />
            <BusinessSummery />
            <ServiceCard />
            <CertificatesCarousel />
        </>
    );
};

export default Home;