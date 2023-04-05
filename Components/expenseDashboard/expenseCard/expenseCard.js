// CSS imports
import styles from "./expenseCard.module.css";

/*
    Expense card component
*/
export default function ExpenseCard({ expenseName, expenseType, expenseCost, expenseDate}) {
    return(
        <>
        <div id="ExpenseCard"
             className={`${styles["expense-card"]}
                        d-flex 
                        flex-column
                        gap-2
                        p-3
                        rounded
                        shadow-sm
                        bg-light
                        text-dark`}>

            {/* Expense card title and actions */}
            <div id="TitleAndActions" 
                 className="d-flex 
                            flex-row 
                            justify-content-between 
                            align-items-center">

                {/* Title */}
                <h4 className="my-0">{ expenseName }</h4>

                {/* Actions */}
                <div id="Actions"
                     className="d-flex 
                                flex-row 
                                gap-2 
                                align-items-center">

                    {/* Pen icon */}
                    <div className="custom-pen-button">
                        <i className="fa-solid fa-pen" />
                    </div>

                    {/* Trash icon */}
                    <div className="custom-trash-button">
                        <i className="fa-solid fa-trash" />
                    </div>
                </div>
            </div>

            {/* Expense card details */}
            <div id="ExpenseDetails"
                 className="d-flex 
                            flex-row
                            gap-2">

                {/* Bold text */}
                <div className="d-flex
                                flex-column
                                gap-1">
                    <b><p className="my-0">Expense type:</p></b>
                    <b><p className="my-0">Expense cost:</p></b>
                    <b><p className="my-0">Expense date:</p></b>
                </div>

                {/* Value text */}
                <div className="d-flex
                                flex-column
                                gap-1">
                    <p id="ExpenseTypeValue" 
                       className="my-0">{ expenseType }</p>
                    <p id="ExpenseCostValue"
                       className="my-0">{ expenseCost }</p>
                    <p id="ExpenseDateValue"
                       className="my-0">{ expenseDate }</p>
                </div>
            </div>
        </div>
        </>
    );
}