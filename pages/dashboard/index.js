// Component imports
import ExpenseDashboardGroup from "@/Components/expenseDashboard/expenseDashboardGroup/expenseDashboardGroup";

/*
    Expense dashboard page
*/
export default function Dashboard() {
    return(
        <>
        <main className={'container my-5'}>
            <ExpenseDashboardGroup />
        </main>
        </>
    )
}