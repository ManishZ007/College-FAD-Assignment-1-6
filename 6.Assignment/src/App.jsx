import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);


    function increaseCount() {
        setCount(count + 1);
    }


    function decreaseCount() {
        setCount(count - 1);
    }


    function resetCount() {
        setCount(0);
    }


    return (
        <main className="counter-page">
            <a className="back-link" href={import.meta.env.DEV ? "../index.html" : "../../index.html"}>← All assignments</a>

            <section className="counter-header">
                <p className="eyebrow">COUNTER</p>

                <h1>
                    Simple things,
                    <br />
                    done well.
                </h1>

                <p>
                    A minimal counter built with React.
                </p>
            </section>


            <section className="counter-box">

                <p className="counter-label">
                    CURRENT VALUE
                </p>

                <div className="counter-display">
                    {count}
                </div>


                <div className="counter-controls">

                   <button
    onClick={decreaseCount}
    aria-label="Decrease counter"
>
    −
</button>

<button
    onClick={resetCount}
>
    Reset
</button>

<button
    onClick={increaseCount}
    aria-label="Increase counter"
>
    +
</button>

                </div>

            </section>

        </main>
    );
}

export default App;
