import { getCurrentOrder, getMetals, setMetal } from "../data/database.js"
import "../App.css"

export const Metals = () => {
    const currentOrder = getCurrentOrder()
    const metals = getMetals()

    return (
        <ul onChange={(e) => {
            setMetal(parseInt(e.target.value))
        }}>
            {
                metals.map(metal => {
                    return <li key={metal.id}>
                        <input type="radio"
                            defaultChecked={currentOrder.metalId === metal.id}
                            name="metal" value={metal.id}
                            /> {metal.metal}
                    </li>
                })
            }
        </ul>
    )
}
