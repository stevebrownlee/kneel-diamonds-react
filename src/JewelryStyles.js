import { getCurrentOrder, getStyles, setStyle } from "./data/database.js"


export const JewelryStyles = () => {
    const styles = getStyles()
    const currentOrder = getCurrentOrder()

    return (
        <ul onChange={(e) => {
            setStyle(parseInt(e.target.value))
        }}>
            {
                styles.map(style => {
                    return <li key={style.id}>
                        <input type="radio"
                            defaultChecked={currentOrder.styleId === style.id}
                            name="style" value={style.id}
                        /> {style.style}
                    </li>
                })
            }
        </ul>
    )
}
