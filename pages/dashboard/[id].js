// Component imports
import ExpenseGroup from "@/Components/expenseDashboard/expenseGroup/expenseGroup";
import ExpenseCard from "@/Components/expenseDashboard/expenseCard/expenseCard";
import ExpenseModal from "@/Components/expenseDashboard/expenseModal/expenseModal";

// Extra imports
import { getUser } from "@/server/utils/fetchHelper"
import ExpenseGroupModal from "@/Components/expenseDashboard/expenseGroupModal/expenseGroupModal";


/*
    Expense dashboard page
*/
export default function Dashboard({ userExpenseGroups, userId }) {

    const addExpenseModalId = "expenseModal"
    const addExpenseGroupModalId = "expenseGroupModal"

    return(
        <>

        <ExpenseModal modalId={addExpenseModalId} 
                      userId={userId} 
                      userExpenseGroups={userExpenseGroups}/>
        
        <ExpenseGroupModal modalId={addExpenseGroupModalId} 
                           userId={userId} 
                           userExpenseGroups={userExpenseGroups}/>

        <main className="page-content-wrapper">
            <div className="d-flex
                            flex-row
                            h-100">

                {/* Sidebar navigation */}
                <nav className="d-flex
                                bg-dark
                                shadow-sm
                                flex-column
                                p-3" style={{width: "300px"}}>  

                    {/* Item list */}
                    <ul class="nav 
                               flex-column gap-4">

                        {/* Pages section */}
                        <div className="d-flex
                                        flex-column
                                        gap-1">

                            {/* Nav section name */}
                            <h6 className="border-bottom
                                           text-light 
                                           pb-2">
                                Pages
                            </h6>

                            {/* Expenses */}
                            <li class="nav-item">
                                <a class="btn 
                                          btn-dark
                                          d-flex
                                          gap-2 
                                          align-items-center" 
                                    aria-current="page" 
                                    href="#">
                                        
                                    <i class="fa-solid fa-house"/>

                                    Expenses
                                </a>
                            </li>

                            {/* Statistics */}
                            <li class="nav-item">
                                <a class="btn 
                                          btn-dark 
                                          d-flex
                                          gap-2 
                                          align-items-center" 
                                    href="#">

                                    <i class="fa-solid fa-chart-simple"/>
                                    
                                    Statistics
                                </a>
                            </li>

                            {/* Reports */}
                            <li class="nav-item">
                                <a class="btn 
                                          btn-dark 
                                          d-flex
                                          gap-2 
                                          align-items-center" 
                                    href="#">

                                    <i class="fa-solid fa-file-lines"/>

                                    Reports
                                </a>
                            </li>
                        </div>

                        {/* Actions section */}
                        <div className="d-flex
                                        flex-column
                                        gap-1">

                            {/* Nav section name */}
                            <h6 className="border-bottom
                                           text-light 
                                           pb-2">
                                Actions
                            </h6>

                            {/* Add expense */}
                            <li class="nav-item">
                                <a class="btn 
                                          btn-dark 
                                          d-flex
                                          gap-2 
                                          align-items-center"
                                    data-bs-toggle="modal" 
                                    data-bs-target={`#${addExpenseModalId}`} 
                                    href="#">

                                    <i class="fa-solid fa-plus"/>

                                    Add Expense
                                </a>
                            </li>

                            {/* Add expense */}
                            <li class="nav-item">
                                <a class="btn 
                                          btn-dark 
                                          d-flex
                                          gap-2 
                                          align-items-center"
                                    data-bs-toggle="modal" 
                                    data-bs-target={`#${addExpenseGroupModalId}`} 
                                    href="#">

                                    <i class="fa-solid fa-plus"/>

                                    Add Group
                                </a>
                            </li>
                        </div>
                    </ul>
                </nav>

                {/* Main content container */}
                <main className="d-flex
                                 flex-column
                                 p-4
                                 gap-4
                                 w-100">

                    {/* Section header */}
                    <div class="d-flex 
                                justify-content-between 
                                align-items-center 
                                border-bottom">
                            
                        {/* Dashboard title */}
                        <h1 class="h2">Dashboard</h1>

                        <div class="d-flex
                                    gap-2">

                            {/* Export button */}
                            <button type="button" 
                                    class="btn 
                                           btn-sm 
                                           btn-outline-secondary">
                                Export
                            </button>

                            {/* This week button */}
                            <button type="button" 
                                    class="btn 
                                           btn-sm 
                                           btn-outline-secondary 
                                           dropdown-toggle">

                                <i class="fa-solid fa-calendar pe-2"/>

                                This week
                            </button>
                        </div>
                    </div>

                        {/* Expense groups and expenses */}
                        <div className="d-flex 
                                        flex-row 
                                        w-100 
                                        gap-4 
                                        h-100 
                                        overflow-hidden">

                            {
                                userExpenseGroups.map((group) => (
                                    <ExpenseGroup groupName={group.groupName}>
                                        {
                                            group.expenses.map((expense) => (
                                                <ExpenseCard expenseName={expense.expenseName} 
                                                             expenseType={expense.expenseType}
                                                             expenseCost={expense.expenseCost}
                                                             expenseDate={expense.expenseDate}/>
                                            ))
                                        }
                                    </ExpenseGroup>
                                ))
                            }
                        </div>
                </main>
            </div>
        </main>
        </>
    );
}

/*
    getServerSideProps funcion
*/
export async function getServerSideProps(context) {
    const userId = context.params.id;
    const user = await getUser(userId);
    return { 
        props: { 
            userExpenseGroups: user.expenseGroups,
            userId: userId 
        } 
    };
}