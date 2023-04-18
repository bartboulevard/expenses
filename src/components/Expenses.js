import './Expenses.css'
import ExpenseItem from "./ExpenseItem";

function Expenses(props){
    const expenses = props.expenses;

    return (
        <div className={"expenses"}>
            <ExpenseItem expenseData={expenses[0]}></ExpenseItem>
            <ExpenseItem expenseData={expenses[1]}></ExpenseItem>
        </div>
    )
}

export default Expenses;