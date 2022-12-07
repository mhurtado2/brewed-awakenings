import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {

        const itemClicked = clickEvent.target


        if (itemClicked.id.startsWith("product")) {

            const [, productPrimaryKey] = itemClicked.id.split("--")
            let matchingProduct = null 
            for (const product of products) {
                if (parseInt(productPrimaryKey) === product.id) {
                    matchingProduct = product
                }
            }
            window.alert(`${matchingProduct.name} costs $${matchingProduct.price.toFixed(2)}`)
        }
    }
)



export const Products = () => {
    let html = "<ul>" //one mistake 

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

