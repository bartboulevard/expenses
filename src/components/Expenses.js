import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "./UI/Card";

function Expenses(props){
    const expenses = props.expenses;

    return (
        <Card className={"expenses"}>
            <ExpenseItem expenseData={expenses[0]}></ExpenseItem>
            <ExpenseItem expenseData={expenses[1]}></ExpenseItem>
        </Card>
    )
}

export default Expenses;