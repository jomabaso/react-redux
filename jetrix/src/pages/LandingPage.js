import React from 'react';
import HeroSection from '../components/public_layouts/landing_components/herosection_component/Herosection';
import Features from '../components/public_layouts/landing_components/features_component/Features';
import Header from '../components/public_layouts/landing_components/header_component/Header.js';
import Footer from '../components/public_layouts/landing_components/footer_component/Footer.js';

const LandingPage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <Features />
            <Footer/>
        </>
    );
};

export default LandingPage;