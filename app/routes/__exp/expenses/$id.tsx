import ExpensesForm from "~/components/ExpensesForm"
import Modal from "~/components/overlay/Modal"
import { useNavigate } from '@remix-run/react';
import type { ActionFunction} from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { deleteExpense, updateExpenses } from './../../../utils/expenses.server';

const EditExpense:React.FC=()=>{
    const navigation=useNavigate()

    const onCloseModalHandler=()=>{
        navigation('..')
    }

    return(
        <Modal onClose={onCloseModalHandler}>
            <ExpensesForm/>
        </Modal>
    )
}


export default EditExpense

export const action:ActionFunction=async({request,params})=>{
    const expenseId=params.id

    if(request.method==='PATCH'){
        const formData=await request.formData()
        const expenseData=Object.fromEntries(formData)

        await updateExpenses(expenseId,expenseData)
        return redirect(`/expenses`)
    } else if (request.method==='DELETE'){
        await deleteExpense(expenseId)
        return {deleteId:expenseId}
    }
}