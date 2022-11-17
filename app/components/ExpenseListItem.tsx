import { Link } from "@remix-run/react"

interface Props{
    id:string
    title:string
    amount:number
}

const ExpenseListItem:React.FC<Props>=({id,title,amount})=>{
    return(
        <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        <button >Delete</button>
        {/* <Form method='delete' action={`/expenses/${id}`}>
          <button formMethod='delete'>Delete</button>
        </Form> */}
        <Link to={id}>Edit</Link>
      </menu>
    </article>
    )
}   


export default ExpenseListItem