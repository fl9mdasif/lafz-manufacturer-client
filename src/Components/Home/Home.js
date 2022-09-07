import React from 'react';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import Hero from '../Hero.js/Hero';
import CertificatesCarousel from './CertificatesCarousel';
import NewProducts from '../Products/NewProducts';
import ServiceCard from './ServiceCard';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Hero />
            <BusinessSummery />
            <NewProducts />
            <ServiceCard />
            <Reviews />
            <CertificatesCarousel />
        </>
    );
};

export default Home;