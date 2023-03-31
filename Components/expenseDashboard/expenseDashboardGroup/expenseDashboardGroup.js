/*
    Login form component
*/

// CSS imports
import styles from './expenseDashboardList.module.css'

export default function ExpenseDashboardGroup() {
    return(
        <>
        <div style={{backgroundColor: 'blue'}}>
            <div>
                <div class="left-column">
                    <div class="row">Expense Name</div>
                    <div class="row">Expense Type</div>
                    <div class="row">Expense Cost</div>
                    <div class="row">Expense Date</div>
                </div>
                <div class="right-column">
                    <div class="row">Expense Name</div>
                    <div class="row">Expense Type</div>
                    <div class="row">Expense Cost</div>
                    <div class="row">Expense Date</div>
                </div>
            </div>
        </div>
        </>
    )
}