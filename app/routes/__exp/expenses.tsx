import type { LoaderFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react"
import { FaPlus, FaDownload } from "react-icons/fa";
import ExpensesList from "~/components/ExpensesList";
import { getExpenses } from "~/utils/expenses.server";



const Expenses:React.FC=()=>{
    const expenses= useLoaderData()
    return(
        <>
        <Outlet/>
        <main>
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
            <ExpensesList expenses={expenses}/>
        </main>

        </>
    )
}

export default Expenses

export const loader:LoaderFunction=async()=>{
    const expenses=await getExpenses()
    return expenses
}