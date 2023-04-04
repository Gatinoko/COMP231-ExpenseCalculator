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

                        {/* User login header */}
                        <h1>Add Group</h1>

                        {/* Close button */}
                        <button type="button" 
                                class="btn-close" 
                                data-bs-dismiss="modal" 
                                aria-label="Close"></button>
                    </div>

                    {/* Modal body */}
                    <div class="modal-body">

                        {/* Add expense group model */}
                        <form action={`/api/post/userExpenseGroups/${userId}`}>
                            <div className="d-flex flex-column gap-4">

                                {/* Current groups table */}
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Current Groups</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            userExpenseGroups.map((group) => (
                                                <tr>
                                                    <td scope="row">{ group.groupName }</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>

                                {/* Expense name input field */}
                                <div className="mb-3">
                                    <label className="form-label">Expense Group Name</label>
                                    <input type="text" 
                                           className="form-control" 
                                           name="groupName"
                                           placeholder="Expense Group Name"
                                           required />
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