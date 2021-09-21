import React from "react";
import useCustomCounter from "./custom";
import useCustomDecr from "./custom1";

function App() {
    const data = useCustomCounter();
    const data1 = useCustomDecr();

    return(
        <div>
        <h1>Id Up: {data.id}</h1>
        <button type="button" onClick={data.idIncrement}>Increment</button>
        <h1>Id Down: {data1.id1}</h1> 
        <button type="button" onClick={data1.idDecrement}>Decrement</button>
        </div> 
    );
}

export default App;