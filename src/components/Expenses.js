import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  const expenses = props.items;

  const expenseList = expenses.map( expense =>  <ExpenseItem title= {expense.title} 
    amount={expense.amount} 
    date={expense.date}/>
    );

  return (
    <div className="expenses">
      {expenseList}
    </div>
  );
}

export default Expenses;