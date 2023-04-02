// CSS imports
import styles from './expenseModal.module.css'

/*
    Expense modal component
*/
export default function ExpenseModal({ modalId }) { 
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
                        <h1>Add Expense</h1>

                        {/* Close button */}
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    {/* Modal body */}
                    <div class="modal-body">
                        <form>

                            {/* Expense name input field */}
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" 
                                    className="form-label">Expense Name</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    placeholder="Expense Name"
                                    required />
                            </div>

                            {/* Expense type input field */}
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" 
                                    className="form-label">Expense Type</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    placeholder="Expense Type"
                                    required />
                            </div>

                            {/* Expense cost input field */}
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" 
                                    className="form-label">Expense Cost</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    placeholder="Expense Cost"
                                    required />
                            </div>

                            {/* Expense date input field */}
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" 
                                    className="form-label">Expense Date</label>
                                <input type="text" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    placeholder="Expense Date"
                                    required />
                            </div>

                            {/* Expense group input field */}
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" 
                                    className="form-label">Expense Group</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </form>
                    </div>

                    {/* Buttons */}
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Add Expense</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}