import React from 'react';

// Action
import { increase } from '../redux/counter/CounterAction';

// connect
import { connect } from 'react-redux';

const Counter = (props) => {
    return (
        <div>
            <h1>Counter - {props.counter}</h1>
            <button onClick={props.increase}>Up</button>
            <button onClick={props.decrease}>Down</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increase: () => dispatch(increase()),
        decrease: () => dispatch({type: "DECREASE"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);