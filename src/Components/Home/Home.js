import React from 'react';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import Hero from '../Hero.js/Hero';
import Products from '../Products/Products';
import Testimonial from '../Testimonial/Testimonial';
import CertificatesCarousel from './CertificatesCarousel';
import ServiceCard from './ServiceCard';

const Home = () => {
    return (
        <>
            <Hero />
            <BusinessSummery />
            <Products />
            <ServiceCard />
            <Testimonial />
            <CertificatesCarousel />
        </>
    );
};

export default Home;