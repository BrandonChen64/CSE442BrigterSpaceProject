import React, { useState } from 'react';

export default function GoodCounter() {
    const [state, setState] = useState({
        count1: 0,
        count2: 0,
        count3: 0
    });

    return (
        <div>
            <p>Count1: {state.count1}</p>
            <button onClick={() => setState(prevState => ({ ...prevState, count1: prevState.count1 + 1 }))}>Increase</button>
            <br />
            <p>Count2: {state.count2}</p>
            <button onClick={() => setState(prevState => ({ ...prevState, count2: prevState.count2 + 1 }))}>Increase</button>
            <br />
            <p>Count3: {state.count3}</p>
            <button onClick={() => setState(prevState => ({ ...prevState, count3: prevState.count3 + 1 }))}>Increase</button>
        </div>
    );
}