import React from 'react';

// Action
import { increaseCounter } from '../redux/counter/CounterAction';
import { decreaseCounter } from '../redux/counter/CounterAction';

// hooks
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

    const counter = useSelector((state) => state.counterState.counter)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter - {counter}</h1>
            <button onClick={() => dispatch(increaseCounter())}>Up</button>
            <button onClick={() => dispatch(decreaseCounter())}>Down</button>
        </div>
    );
};


export default Counter;