export interface ExpensesProps {
    id:string
    title:string
    amount:number
    date:Date
    createdAt:Date
    isEdit:boolean
}

export interface ExpenseData {
    title:string
    amount:string
    date:string
}

export type myFunction= {
    oneFun:()=>void
}