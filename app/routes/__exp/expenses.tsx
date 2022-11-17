import { Link, Outlet } from "@remix-run/react"
import { FaPlus, FaDownload } from "react-icons/fa";

const Expenses:React.FC=()=>{
    return(
        <>
        <Outlet/>
        <section id="expenses-actions">
        <Link to={'add'}>
            <FaPlus />
            <span>Add Expenses</span>
        </Link>
        <a href="/expenses/raw">
            <FaDownload />
            <span>Download Raw Data</span>
        </a>
        </section>
        </>
    )
}

export default Expenses