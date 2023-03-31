// Component imports
import ExpenseGroup from "@/Components/expenseDashboard/expenseGroup/expenseGroup";
import ExpenseCard from "@/Components/expenseDashboard/expenseCard/expenseCard";

/*
    Expense dashboard page
*/
export default function Dashboard() {
    return(
        <>
        <div className="container-fluid vh-100">
            <div className="row">

                {/* Sidebar */}
                <nav id="sidebarMenu" 
                     className="col-md-3
                                vh-100 
                                col-lg-2 
                                d-md-block 
                                bg-light 
                                sidebar 
                                collapse">

                    <div class="position-sticky 
                                pt-3 
                                sidebar-sticky">
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
                    </div>
                </nav>

                {/* Main content */}
                <main class="col-md-9 
                             ms-sm-auto 
                             col-lg-10 
                             px-md-4
                             vh-100">

                    {/* Section header */}
                    <div class="d-flex 
                                justify-content-between 
                                flex-wrap 
                                flex-md-nowrap 
                                align-items-center 
                                pt-3 pb-2 
                                mb-3 
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
                                <i class="fa-solid fa-calendar"/>
                                This week
                            </button>
                        </div>
                    </div>

                    <div className="d-flex flex-row w-100 gap-4">
                        <ExpenseGroup>
                            <ExpenseCard expenseName={"Expense 1"}/>
                            <ExpenseCard expenseName={"Expense 2"}/>
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
        </div>
        </>
    )
}