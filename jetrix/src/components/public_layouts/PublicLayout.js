import React from "react";
import PublicHeader from './landing_components/header_component/Header';
import PublicFooter from './landing_components/footer_component/Footer';

const PublicLayout = ({ children}) =>{
    return (
        <>
            <PublicHeader/>
            <main>{children}</main>
            <PublicFooter/>
        </>
    );
};

export default PublicLayout;