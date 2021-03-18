import './App.css';
import { Metals } from './components/Metals.js';
import { Orders } from './components/Orders.js';

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

                </section>

                <section className="choices__styles options">
                    <h2>Styles</h2>

                </section>
            </article>

            <article>
                <button id="orderButton">Create Custom Order</button>
            </article>

            <article className="customOrders">
                <h2>Custom Jewelry Orders</h2>
                <Orders />
            </article>
        </>
    );
}

export default App;
