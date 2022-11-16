
import type  { LinksFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import React from 'react';
import RootHeader from '~/components/RootHeader';
import rootStyles from '~/styles/main.css'

const RootLayout:React.FC=()=>{
    return(
        <>
        <RootHeader/>
        <Outlet/>
        </>
    )
}


export default RootLayout

export const links:LinksFunction=()=>{
    return [{rel:'stylesheet',href:rootStyles}]
}