import { getMetals, getOrders, getSizes, getStyles } from "../data/database.js"


const buildOrderListItem = (order) => {
    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()

    const metalPrice = metals.find(m => m.id === order.metalId).price
    const sizePrice = sizes.find(s => s.id === order.sizeId).price
    const stylePrice = styles.find(st => st.id === order.styleId).price

    let totalCost = metalPrice + stylePrice + sizePrice

    if (order.type === "earrings") {
        totalCost *= 2
    }

    if (order.type === "necklace") {
        totalCost *= 4
    }

    return <li key={order.id}>
        Order #{order.id} cost {totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}
    </li>
}

export const Orders = () => {
    const orders = getOrders()

    return (
        <ul>
            { orders.map(buildOrderListItem) }
        </ul>
    )
}
