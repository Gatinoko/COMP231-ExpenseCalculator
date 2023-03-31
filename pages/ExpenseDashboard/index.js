/*
    Login page
*/

// Component imports
import ExpenseDashboardList from "@/Components/ExpenseDashboardList/ExpenseDashboardList";

export default function ExpenseDashboard() {
    return(
        <>
        <main className={'container my-5'}>
            <ExpenseDashboardList />
        </main>
        </>
    )
}