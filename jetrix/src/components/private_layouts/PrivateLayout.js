import React from "react";
import PrivateHeader from './header_private_component/PrivateHeader'
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const PrivateLayout = ({ children }) => {
    const authState = useSelector((state)=> state.auth.isAuthenticated)

    if(!authState){
        return <Navigate to='/login'/>
    }else{
        return (
            <>
                <PrivateHeader />
                <main>{children}</main>
            </>
        )
    }
}

export default PrivateLayout;



