// CSS imports
import styles from "./expenseGroupModal.module.css";

/*
    Expense modal component
*/
export default function ExpenseGroupModal({ modalId, userId, userExpenseGroups }) { 
    return(
        <>
        <div class="modal fade" 
             id={modalId} 
             tabindex="-1" 
             aria-labelledby="exampleModalLabel" 
             aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">

                    {/* Header */}
                    <div class="modal-header">

                        {/* Manage groups header */}
                        <h1>Add Group</h1>

                        {/* Close button */}
                        <button type="button" 
                                class="btn-close" 
                                data-bs-dismiss="modal" 
                                aria-label="Close">        
                        </button>
                    </div>

                    {/* Modal body */}
                    <div class="modal-body">

                        {/* Add expense group form */}
                        <form action={`/api/post/userExpenseGroups/${userId}`}>

                            {/* Expense name input field */}
                            <div className="mb-3">
                                <label className="form-label">Expense Group Name</label>
                                <input type="text" 
                                    className="form-control" 
                                    name="groupName"
                                    placeholder="Expense Group Name"
                                    required />
                            </div>

                            {/* Buttons */}
                            <div class="modal-footer">

                                {/* Close button */}
                                <button type="button" 
                                        class="btn btn-secondary" 
                                        data-bs-dismiss="modal">
                                    Close
                                </button>
                                
                                {/* Add group button */}
                                <button type="submit"
                                        formMethod="POST" 
                                        class="btn btn-primary">
                                    Add Group
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}