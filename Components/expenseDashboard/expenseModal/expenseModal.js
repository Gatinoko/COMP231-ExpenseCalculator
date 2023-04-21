// CSS imports
import styles from "./expenseModal.module.css";

/*
    Expense modal component
*/
export default function ExpenseModal({ modalId, userId, userExpenseGroups }) { 
    return(
        <>
        <div class="modal fade" 
             id={modalId} 
             tabindex="-1" 
             aria-labelledby="exampleModalLabel" 
             aria-hidden="true">
            <div class="modal-dialog 
                        modal-dialog-centered">
                <div class="modal-content">

                    {/* Header */}
                    <div class="modal-header">

                        {/* User login header */}
                        <h1>Add Expense</h1>

                        {/* Close button */}
                        <button type="button" 
                                class="btn-close" 
                                data-bs-dismiss="modal" 
                                aria-label="Close"></button>
                    </div>

                    {/* Add expense form */}
                    <form action={`/api/post/userExpenses/${userId}`}>

                        {/* Modal body */}
                        <div class="modal-body">

                            {/* Expense name input field */}
                            <div className="mb-3">
                                <label className="form-label">Expense Name</label>
                                <input type="text" 
                                       className="form-control" 
                                       name="expenseName"
                                       placeholder="Expense Name"
                                       required />
                            </div>

                            {/* Expense type input field */}
                            <div className="mb-3">
                                <label className="form-label">Expense Type</label>
                                <input type="text" 
                                       className="form-control" 
                                       name="expenseType" 
                                       placeholder="Expense Type"
                                       required />
                            </div>

                            {/* Expense cost input field */}
                            <div className="mb-3">
                                <label className="form-label">Expense Cost</label>
                                <input type="number" 
                                       className="form-control" 
                                       name="expenseCost"
                                       placeholder="Expense Cost"
                                       required />
                            </div>

                            {/* Expense date input field */}
                            <div className="mb-3">
                                <label className="form-label">Expense Date</label>
                                <input type="text" 
                                       className="form-control" 
                                       name="expenseDate" 
                                       placeholder="Expense Date"
                                       required />
                            </div>

                            {/* Expense group input field */}
                            <div className="mb-3">
                                <label className="form-label">Expense Group</label>
                                <select class="form-select" 
                                        aria-label="Default select example" 
                                        name="expenseGroup">
                                    {
                                        userExpenseGroups.map((group) => (
                                            <option value={group.groupName}>{group.groupName}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div class="modal-footer">

                            {/* Close button */}
                            <button type="button" 
                                    class="btn btn-secondary" 
                                    data-bs-dismiss="modal">
                                Close
                            </button>
                            
                            {/* Add expense button */}
                            <button type="submit"
                                    formMethod="POST" 
                                    class="btn btn-primary">
                                Add Expense
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}