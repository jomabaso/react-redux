import React from 'react';
// import Header from '../components/landing_components/header_component/Header';
import HeroSection from '../components/landing_components/herosection_component/Herosection';
import Features from '../components/landing_components/features_component/Features';
// import Footer from '../components/landing_components/footer_component/Footer';

const LandingPage = () => {
    return (
        <>
            {/* <Header/> */}
            <HeroSection/>
            <Features/>
            {/* <Footer/> */}
        </>
    );
};

export default LandingPage;