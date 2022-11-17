import { Link, Outlet } from "@remix-run/react"
import { FaPlus, FaDownload } from "react-icons/fa";
import ExpensesList from "~/components/ExpensesList";
import type { ExpensesProps } from './../../utils/allInterface';

const EXPENSES_LIST:ExpensesProps[]=[
    {id:'e1',title:'React Course',amount:45,createdAt:new Date(1668667656147),isEdit:false,date:new Date(1668667656147)},
    {id:'e1',title:'React Course',amount:45,createdAt:new Date(1668667656147),isEdit:false,date:new Date(1668667656147)},
]

const Expenses:React.FC=()=>{
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
            <ExpensesList expenses={EXPENSES_LIST}/>
        </main>

        </>
    )
}

export default Expenses