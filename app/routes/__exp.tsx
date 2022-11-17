import type { LinksFunction } from "@remix-run/node"
import { Outlet } from "@remix-run/react"
import ExpHeader from "~/components/ExpHeader"
import expStyles from '~/styles/exp.css'

const ExpLayout:React.FC=()=>{
    return(
        <>
        <ExpHeader/>
        <Outlet/>
        </>
    )
}


export default ExpLayout

export const links:LinksFunction=()=>{
    return[{rel:'stylesheet',href:expStyles}]
}