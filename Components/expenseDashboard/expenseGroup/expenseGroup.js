// CSS imports
import styles from './expenseGroup.module.css'

// Component imports
import ExpenseCard from '../expenseCard/expenseCard'

/*
    Expense group component
*/
export default function ExpenseDashboardGroup({ children }) {
    return(
        <>
        <div className={`${styles['expense-group']}
                        d-flex
                        flex-column
                        gap-3`}>

            {/* Expense group title */}
            <h3>Expense group 1</h3>

            {/* Expense cards */}
            <div className="d-flex 
                            flex-column 
                            gap-2 h-100 
                            overflow-auto">
                { children }
            </div>
        </div>
        </>
    )
}