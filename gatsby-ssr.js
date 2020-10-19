import React from 'react'; 
import { IdentityContextProvider } from 'react-netlify-identity-widget'
export const wrapRootelement = (element) => {
    return(
    <IdentityContextProvider>{element}</IdentityContextProvider>
    )
};