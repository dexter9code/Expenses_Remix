import type { LinksFunction } from "@remix-run/node"
import AuthFrom from "~/components/AuthForm"
import authStyles from '~/styles/auth.css'

const Auth:React.FC=()=>{
    return (
        <>
        <AuthFrom/>
        </>
    )
}

export default Auth

export const links:LinksFunction=()=>{
    return [{rel:'stylesheet',href:authStyles}]
}