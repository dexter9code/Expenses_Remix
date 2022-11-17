import { Form, Link } from "@remix-run/react";

const ExpensesForm: React.FC = () => {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10
  return (
    <Form method="post" className="form" id="expense-form">
      <p>
        <label htmlFor="title">Expense Title</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          maxLength={30}
          //   defaultValue={defaultValues.title}
        />
      </p>

      <div className="form-row">
        <p>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="0"
            step="0.01"
            required
            // defaultValue={defaultValues.amount}
          />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            max={today}
            required
            // defaultValue={
            //   defaultValues.date ? defaultValues.date.slice(0, 10) : ""
            // }
          />
        </p>
      </div>
      {/* {validationErros && (
        <ul>
          {Object.values(validationErros).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )} */}
      <div className="form-actions">
        <button>Save</button>
        <Link to="/expenses">Cancel</Link>
      </div>
    </Form>
  );
};

export default ExpensesForm;
