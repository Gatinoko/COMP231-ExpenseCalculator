// CSS imports
import styles from './expenseModal.module.css'

/*
    Expense modal component
*/
export default function ExpenseModal() {
    return(
        <>
        <div className='container d-flex justify-content-center'>
            <form className={`d-flex flex-column p-3 mx-5 shadow rounded ${styles['AddExpense-form']}`}>

                {/* User login header */}
                <div className='mb-3'>
                    <h1>Add Expense</h1>
                </div>

                {/* Expense Name input field */}
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" 
                        className="form-label">Expense Name</label>
                    <input type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="Expense Name"
                        required />
                </div>

                {/* Expense Type input field */}
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" 
                        className="form-label">Expense Type</label>
                    <input type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="Expense Type"
                        required />
                </div>

                {/* Expense Cost input field */}
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" 
                        className="form-label">Expense Cost</label>
                    <input type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="Expense Cost"
                        required />
                </div>

                {/* Expense Date input field */}
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" 
                        className="form-label">Expense Date</label>
                    <input type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="Expense Date"
                        required />
                </div>

                {/* Login button */}
                <button type="submit" 
                        className="btn btn-light align-self-center mb-3">Add Expense</button>
                
            </form>
        </div>
        </>
    )
}