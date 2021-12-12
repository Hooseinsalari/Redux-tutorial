import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

// Action
import { increaseNumber } from '../redux/number/NumberAction';
import { decreaseNumber } from '../redux/number/NumberAction';

const Number = () => {

    const number = useSelector(state => state.numberState.number)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Number - {number}</h1>
            <button onClick={() => dispatch(increaseNumber())}>increase</button>
            <button onClick={() => dispatch(decreaseNumber())}>decrease</button>
        </div>
    );
};

export default Number;