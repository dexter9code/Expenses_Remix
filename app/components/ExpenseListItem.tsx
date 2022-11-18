import { Form, Link, useFetcher } from "@remix-run/react"

interface Props{
    id:string
    title:string
    amount:number
}

const ExpenseListItem:React.FC<Props>=({id,title,amount})=>{
    const fetcher=useFetcher()

    function deleteExpenseHandler() {
      const isConfrim =confirm(`Are you sure?`)
      if(!isConfrim)return

      fetcher.submit(null,{
        method:'delete',
        action:`/expenses/${id}`
      })
    }

    if(fetcher.state !== 'idle'){
      return <article className="expense-item locked">
        <p>Deleting...</p>
      </article>
    }

    return(
        <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        <button onClick={deleteExpenseHandler} >Delete</button>
        {/* <Form method='delete' action={`/expenses/${id}`}>
          <button formMethod='delete'>Delete</button>
        </Form> */}
        <Link to={id}>Edit</Link>
      </menu>
    </article>
    )
}   


export default ExpenseListItem