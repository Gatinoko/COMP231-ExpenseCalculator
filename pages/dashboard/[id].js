// Component imports
import ExpenseGroup from "@/Components/expenseDashboard/expenseGroup/expenseGroup";
import ExpenseCard from "@/Components/expenseDashboard/expenseCard/expenseCard";

// Extra imports
import { getUser } from "@/server/utils/fetchHelper"


/*
    Expense dashboard page
*/
export default function Dashboard() {
    return(
        <>
        <main className="page-content-wrapper">
            <div className="d-flex
                            flex-row
                            h-100">

                {/* Sidebar navigation */}
                <nav className="d-flex
                                bg-light
                                shadow-sm
                                flex-column
                                p-3">  

                    {/* Item list */}
                    <ul class="nav 
                               flex-column">

                        {/* Expenses */}
                        <li class="nav-item">
                            <a class="nav-link 
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
                            <a class="nav-link 
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
                            <a class="nav-link 
                                      d-flex 
                                      gap-2 
                                      align-items-center" 
                                href="#">
                                <i class="fa-solid fa-file-lines"/>
                                Reports
                            </a>
                        </li>
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

                        <div className="d-flex 
                                        flex-row 
                                        w-100 
                                        gap-4 
                                        h-100 
                                        overflow-hidden">

                            <ExpenseGroup>
                                <ExpenseCard expenseName={"Expense 1"}/>
                                <ExpenseCard expenseName={"Expense 2"}/>
                                <ExpenseCard expenseName={"Expense 3"}/>
                                <ExpenseCard expenseName={"Expense 3"}/>
                                <ExpenseCard expenseName={"Expense 3"}/>
                                <ExpenseCard expenseName={"Expense 3"}/>
                            </ExpenseGroup>
                            <ExpenseGroup>
                                <ExpenseCard expenseName={"Expense 1"}/>
                                <ExpenseCard expenseName={"Expense 2"}/>
                                <ExpenseCard expenseName={"Expense 3"}/>
                            </ExpenseGroup>
                        </div>
                </main>
            </div>
        </main>
        </>
    )
}

/*
    getServerSideProps funcion
*/
export async function getServerSideProps(context) {
    const userId = context.params.id
    const user = await getUser(userId)
    return { props: { userExpenses: user.expenses } }
}