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

            {/* Expense group header */}
            <div className="d-flex align-items-center justify-content-between border-bottom">

                {/* Expense group title */}
                <h3>{ groupName }</h3>

                {/* Trash icon */}
                <div className="custom-trash-button">
                    <i className="fa-solid fa-trash" />
                </div>
            </div>

            {/* Expense group content */}
            <div className="d-flex 
                            flex-column 
                            gap-2 h-100 
                            overflow-auto">

                {/* Expense cards */}
                { children }
            </div>
        </div>
        </>
    );
}