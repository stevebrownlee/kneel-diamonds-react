import './App.css';
import { DiamondSizes } from './components/DiamondSizes.js';
import { Metals } from './components/Metals.js';
import { Orders } from './components/Orders.js';
import { addCustomOrder } from './data/database.js';
import { JewelryStyles } from './JewelryStyles.js';

function App() {
    return (
        <>
            <article className="choices">
                <section className="choices__metals options">
                    <h2>Metals</h2>
                    <Metals />
                </section>

                <section className="choices__sizes options">
                    <h2>Sizes</h2>
                    <DiamondSizes />
                </section>

                <section className="choices__styles options">
                    <h2>Styles</h2>
                    <JewelryStyles />
                </section>
            </article>

            <article>
                <button id="orderButton"
                    onClick={
                        () => addCustomOrder()
                    }
                    >Create Custom Order</button>
            </article>

            <article className="customOrders">
                <h2>Custom Jewelry Orders</h2>
                <Orders />
            </article>
        </>
    );
}

export default App;
