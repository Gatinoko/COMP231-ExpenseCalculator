// Component imports
import ExpenseGroup from "@/Components/expenseDashboard/expenseGroup/expenseGroup";
import ExpenseCard from "@/Components/expenseDashboard/expenseCard/expenseCard";

/*
    Expense dashboard page
*/
export default function Dashboard() {
    return(
        <>
        <main className={'container my-5'}>
            <ExpenseGroup>
                <ExpenseCard expenseName={"Expense 1"}/>
                <ExpenseCard expenseName={"Expense 2"}/>
                <ExpenseCard expenseName={"Expense 3"}/>
            </ExpenseGroup>
        </main>
        </>
    )
}