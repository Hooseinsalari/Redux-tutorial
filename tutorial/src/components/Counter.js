import React, { useState } from 'react';
import { increase } from '../redux/counter/counterActions';
import { decrease } from '../redux/counter/counterActions';
import {useDispatch, useSelector} from "react-redux"

const Counter = (props) => {
    const [value, setValue] = useState(1)

    const counter = useSelector((state) => state.counter.counter)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Counter - {counter}</h1>
            <input type="number" value={value} onChange={(event) => setValue(event.target.value) } />
            <button onClick={() => dispatch(increase(+value))}>increase</button>
            <button onClick={() => dispatch(decrease(+value))}>decrease</button>
        </div>
    );
};


// const mapStateToProps = (state) => {
//     return {
//         counter: state.counter
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increase: () => dispatch(increase()),
//         decrease: () => dispatch(decrease()) 
//     }
// }


export default Counter;