import { getEmployees, getOrders, getProducts} from "./database.js"
import { Orders } from "./Orders.js"
import { Products } from "./Products.js"

const employees = getEmployees()
const orders = getOrders()

/*
document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {

        const itemClicked = clickEvent.target


        if (itemClicked.id.startsWith("employee")) {

            const [employeePrimaryKey, ] = itemClicked.id.split("--")
            for (const employee of employees) {
                if (parseInt(employeePrimaryKey) === employee.id) {
                    const sales = filterEmployeeByOrder(employee)
                    const Products = assignedProducts(orders)
                    window.alert(`${employee.name} sold ${sales.id} ${Products.id}`)
                }
            }
        }
    }
)
*/


const employeeOrders = (employee) => {
    let fulfilledOrders = 0

    for (const order of orders) {
        if (order.employeeId === employee.id) {
            // Increment the number of fulfilled orders
            fulfilledOrders += 1
        }
    }

    // Return how many orders were fulfilled
    return fulfilledOrders
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if ( employee.id === parseInt(employeeId)) {

                    const orderCount = employeeOrders(employee)

                    window.alert(` ${employee.name} sold ${orderCount} products `)
                }
            }
        }
    }
)


export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }
// two mistake employee id
    html += "</ul>"

    return html //one mistake found
}

