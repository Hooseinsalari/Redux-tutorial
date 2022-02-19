import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { increase } from '../redux/number/numberActions';
import { decrease } from '../redux/number/numberActions';

const Number = () => {

    const number = useSelector(state => state.number.number)

    const dispatch = useDispatch()

    return (
        <div>
            <h1>Counter - {number}</h1>
            <button onClick={() => dispatch(increase())}>increase</button>
            <button onClick={() => dispatch(decrease())}>decrease</button>
        </div>
    );
};

export default Number;