import { getCurrentOrder, getSizes, setSize } from "../data/database.js"


export const DiamondSizes = () => {
    const sizes = getSizes()
    const currentOrder = getCurrentOrder()

    return (
        <ul onChange={(e) => {
            setSize(parseInt(e.target.value))
        }}>
            {
                sizes.map(size => {
                    return <li key={size.id}>
                        <input type="radio"
                            defaultChecked={currentOrder.sizeId === size.id}
                            name="size" value={size.id}
                        /> {size.carets}
                    </li>
                })
            }
        </ul>
    )
}
