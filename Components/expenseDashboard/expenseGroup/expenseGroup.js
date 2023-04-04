// CSS imports
import styles from "./expenseGroup.module.css";

// Component imports
import ExpenseCard from "../expenseCard/expenseCard";

/*
    Expense group component
*/
export default function ExpenseDashboardGroup({ children, groupName }) {
    return(
        <>
        <div className={`${styles["expense-group"]}
                         d-flex
                         flex-column
                         gap-3
                         rounded
                         p-3
                         shadow
                         bg-dark
                         text-light`}>

            {/* Expense group title */}
            <h3 className="border-bottom 
                           pb-2">
                { groupName }
            </h3>

            {/* Expense cards */}
            <div className="d-flex 
                            flex-column 
                            gap-2 h-100 
                            overflow-auto">
                { children }
            </div>
        </div>
        </>
    );
}