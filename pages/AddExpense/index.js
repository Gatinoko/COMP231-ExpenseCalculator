/*
    Add Expense page
*/

// Component imports
import AddExpenseForm from "@/Components/AddExpenseForm/AddExpenseForm";

export default function AddExpense() {
    return(
        <>
        <main className={'container my-5'}>
            <AddExpenseForm />
        </main>
        </>
    )
}