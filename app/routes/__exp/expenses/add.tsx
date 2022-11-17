import type { NavigateFunction} from "@remix-run/react";
import { useNavigate } from "@remix-run/react"
import ExpensesForm from "~/components/ExpensesForm";
import Modal from "~/components/overlay/Modal"

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


export default AddExpenses