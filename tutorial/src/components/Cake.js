import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { increaceCake } from '../redux/cake/CakeAction';
import { decreaseCake } from '../redux/cake/CakeAction';

const Cake = () => {

    const cake = useSelector((state) => state.cakeState.cake)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>number of cake: {cake} </h1>
            <button onClick={() => dispatch(increaceCake())}>increase</button>
            <button onClick={() => dispatch(decreaseCake())}>decrease</button>
        </div>
    );
};

export default Cake;