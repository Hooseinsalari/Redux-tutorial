import React, { useState } from 'react';

// Action
import { increaseCounter } from '../redux/counter/CounterAction';
import { decreaseCounter } from '../redux/counter/CounterAction';

// hooks
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const [value, setValue] = useState(1)

    const counter = useSelector((state) => state.counterState.counter)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter - {counter}</h1>
            <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
            <button onClick={() => dispatch(increaseCounter(+value))}>Up</button>
            <button onClick={() => dispatch(decreaseCounter(+value))}>Down</button>
        </div>
    );
};


export default Counter;