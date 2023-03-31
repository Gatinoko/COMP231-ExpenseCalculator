// Component imports
import ExpenseDashboardList from "@/Components/expenseDashboardList/ExpenseDashboardList";

/*
    Expense dashboard page
*/
export default function Dashboard() {
    return(
        <>
        <main className={'container my-5'}>
            <ExpenseDashboardList />
        </main>
        </>
    )
}