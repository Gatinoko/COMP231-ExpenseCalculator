export const DeletionType = {
    expense: "Expense",
    group: "Group"
}

export default function DeleteModal({ modalId, userId, deletionType, deletionTarget }) {
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

                        {/* Manage groups header */}
                        <h1>Delete { deletionType }</h1>
                    </div>

                    {/* Modal body */}
                    <div class="modal-body">

                        {/* Deletion message */}
                        <p>
                            Are you sure you would like to delete the { deletionType } “{ deletionTarget }”?
                        </p>
                    </div>
                    
                    {/* Buttons */}
                    <div class="modal-footer">
                        
                        {/* Cancel button */}
                        <button type="button" 
                                class="btn btn-secondary" 
                                data-bs-dismiss="modal">
                            Close
                        </button>
                        
                        {/* Delete button */}
                        <button type="button"
                                class="btn btn-danger">
                            Delete
                        </button>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
}