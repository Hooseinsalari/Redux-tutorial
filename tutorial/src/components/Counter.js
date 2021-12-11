import React from 'react';

// Action
import { increase } from '../redux/counter/CounterAction';

// hooks
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter - {counter}</h1>
            <button onClick={() => dispatch(increase())}>Up</button>
            <button onClick={() => dispatch({type: "DECREASE"})}>Down</button>
        </div>
    );
};


export default Counter;