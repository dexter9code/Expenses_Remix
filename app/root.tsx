import type { LinksFunction, MetaFunction } from "@remix-run/node";
import React from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import globalStyles from '~/styles/global.css'

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

interface Props{
  children:React.ReactNode
}

export const Document:React.FC<Props>=({children})=>{
  return(
    <html lang="en">
      <head>
        <Meta />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <Links />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}


export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export const links:LinksFunction=()=>{
  return[{rel:'stylesheet',href:globalStyles}]
}
