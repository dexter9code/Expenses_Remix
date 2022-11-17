
import type { ExpensesProps } from './../utils/allInterface';
import ExpenseListItem from './ExpenseListItem';

interface Props{
  expenses:ExpensesProps[]
}

const ExpensesList:React.FC<Props>=({ expenses })=> {
  return (
    <ol id="expenses-list">
      {expenses.map((expense) => (
        <li key={expense.id}>
          <ExpenseListItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
          />
        </li>
      ))}
    </ol>
  );
}

export default ExpensesList;
