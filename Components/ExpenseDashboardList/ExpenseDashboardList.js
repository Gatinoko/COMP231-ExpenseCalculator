/*
    Login form component
*/

// CSS imports
import styles from './ExpenseDashboardList.module.css'

export default function ExpenseDashboardList() {
    return(
        <>
        
<div><h3>Expense Group 1</h3>
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

<footer>
  <button class="button" href="/login">Add Expense</button>
  <button class="button">Statistics</button>
</footer>
        </>
    )
}