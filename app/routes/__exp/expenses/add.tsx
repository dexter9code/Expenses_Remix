import type { ActionFunction} from "@remix-run/node";
import { redirect } from "@remix-run/node";
import type { NavigateFunction} from "@remix-run/react";
import { useNavigate } from "@remix-run/react"
import ExpensesForm from "~/components/ExpensesForm";
import Modal from "~/components/overlay/Modal"
import { createExpense } from './../../../utils/expenses.server';

const AddExpenses:React.FC=()=>{
    const navigation:NavigateFunction=useNavigate()

    const onCloseModalHandler=()=>{
        navigation('..')
    }

    return (
        <Modal onClose={onCloseModalHandler}>
            <ExpensesForm/>
        </Modal>
    )
}

export const action:ActionFunction=async({request})=>{
    const formData=await request.formData()
    const expenseData=Object.fromEntries(formData)
    await createExpense(expenseData!)
    return redirect(`/expenses`)
}


export default AddExpenses